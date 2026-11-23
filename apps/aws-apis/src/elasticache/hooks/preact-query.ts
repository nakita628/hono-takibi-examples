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

export function getActionAddTagsToResourceKey() {
  return ['#Action=AddTagsToResource'] as const
}

export function getActionAuthorizeCacheSecurityGroupIngressKey() {
  return ['#Action=AuthorizeCacheSecurityGroupIngress'] as const
}

export function getActionBatchApplyUpdateActionKey() {
  return ['#Action=BatchApplyUpdateAction'] as const
}

export function getActionBatchStopUpdateActionKey() {
  return ['#Action=BatchStopUpdateAction'] as const
}

export function getActionCompleteMigrationKey() {
  return ['#Action=CompleteMigration'] as const
}

export function getActionCopySnapshotKey() {
  return ['#Action=CopySnapshot'] as const
}

export function getActionCreateCacheClusterKey() {
  return ['#Action=CreateCacheCluster'] as const
}

export function getActionCreateCacheParameterGroupKey() {
  return ['#Action=CreateCacheParameterGroup'] as const
}

export function getActionCreateCacheSecurityGroupKey() {
  return ['#Action=CreateCacheSecurityGroup'] as const
}

export function getActionCreateCacheSubnetGroupKey() {
  return ['#Action=CreateCacheSubnetGroup'] as const
}

export function getActionCreateGlobalReplicationGroupKey() {
  return ['#Action=CreateGlobalReplicationGroup'] as const
}

export function getActionCreateReplicationGroupKey() {
  return ['#Action=CreateReplicationGroup'] as const
}

export function getActionCreateSnapshotKey() {
  return ['#Action=CreateSnapshot'] as const
}

export function getActionCreateUserKey() {
  return ['#Action=CreateUser'] as const
}

export function getActionCreateUserGroupKey() {
  return ['#Action=CreateUserGroup'] as const
}

export function getActionDecreaseNodeGroupsInGlobalReplicationGroupKey() {
  return ['#Action=DecreaseNodeGroupsInGlobalReplicationGroup'] as const
}

export function getActionDecreaseReplicaCountKey() {
  return ['#Action=DecreaseReplicaCount'] as const
}

export function getActionDeleteCacheClusterKey() {
  return ['#Action=DeleteCacheCluster'] as const
}

export function getActionDeleteCacheParameterGroupKey() {
  return ['#Action=DeleteCacheParameterGroup'] as const
}

export function getActionDeleteCacheSecurityGroupKey() {
  return ['#Action=DeleteCacheSecurityGroup'] as const
}

export function getActionDeleteCacheSubnetGroupKey() {
  return ['#Action=DeleteCacheSubnetGroup'] as const
}

export function getActionDeleteGlobalReplicationGroupKey() {
  return ['#Action=DeleteGlobalReplicationGroup'] as const
}

export function getActionDeleteReplicationGroupKey() {
  return ['#Action=DeleteReplicationGroup'] as const
}

export function getActionDeleteSnapshotKey() {
  return ['#Action=DeleteSnapshot'] as const
}

export function getActionDeleteUserKey() {
  return ['#Action=DeleteUser'] as const
}

export function getActionDeleteUserGroupKey() {
  return ['#Action=DeleteUserGroup'] as const
}

export function getActionDescribeCacheClustersKey() {
  return ['#Action=DescribeCacheClusters'] as const
}

export function getActionDescribeCacheEngineVersionsKey() {
  return ['#Action=DescribeCacheEngineVersions'] as const
}

export function getActionDescribeCacheParameterGroupsKey() {
  return ['#Action=DescribeCacheParameterGroups'] as const
}

export function getActionDescribeCacheParametersKey() {
  return ['#Action=DescribeCacheParameters'] as const
}

export function getActionDescribeCacheSecurityGroupsKey() {
  return ['#Action=DescribeCacheSecurityGroups'] as const
}

export function getActionDescribeCacheSubnetGroupsKey() {
  return ['#Action=DescribeCacheSubnetGroups'] as const
}

export function getActionDescribeEngineDefaultParametersKey() {
  return ['#Action=DescribeEngineDefaultParameters'] as const
}

export function getActionDescribeEventsKey() {
  return ['#Action=DescribeEvents'] as const
}

export function getActionDescribeGlobalReplicationGroupsKey() {
  return ['#Action=DescribeGlobalReplicationGroups'] as const
}

export function getActionDescribeReplicationGroupsKey() {
  return ['#Action=DescribeReplicationGroups'] as const
}

export function getActionDescribeReservedCacheNodesKey() {
  return ['#Action=DescribeReservedCacheNodes'] as const
}

export function getActionDescribeReservedCacheNodesOfferingsKey() {
  return ['#Action=DescribeReservedCacheNodesOfferings'] as const
}

export function getActionDescribeServiceUpdatesKey() {
  return ['#Action=DescribeServiceUpdates'] as const
}

export function getActionDescribeSnapshotsKey() {
  return ['#Action=DescribeSnapshots'] as const
}

export function getActionDescribeUpdateActionsKey() {
  return ['#Action=DescribeUpdateActions'] as const
}

export function getActionDescribeUserGroupsKey() {
  return ['#Action=DescribeUserGroups'] as const
}

export function getActionDescribeUsersKey() {
  return ['#Action=DescribeUsers'] as const
}

export function getActionDisassociateGlobalReplicationGroupKey() {
  return ['#Action=DisassociateGlobalReplicationGroup'] as const
}

export function getActionFailoverGlobalReplicationGroupKey() {
  return ['#Action=FailoverGlobalReplicationGroup'] as const
}

export function getActionIncreaseNodeGroupsInGlobalReplicationGroupKey() {
  return ['#Action=IncreaseNodeGroupsInGlobalReplicationGroup'] as const
}

export function getActionIncreaseReplicaCountKey() {
  return ['#Action=IncreaseReplicaCount'] as const
}

export function getActionListAllowedNodeTypeModificationsKey() {
  return ['#Action=ListAllowedNodeTypeModifications'] as const
}

export function getActionListTagsForResourceKey() {
  return ['#Action=ListTagsForResource'] as const
}

export function getActionModifyCacheClusterKey() {
  return ['#Action=ModifyCacheCluster'] as const
}

export function getActionModifyCacheParameterGroupKey() {
  return ['#Action=ModifyCacheParameterGroup'] as const
}

export function getActionModifyCacheSubnetGroupKey() {
  return ['#Action=ModifyCacheSubnetGroup'] as const
}

export function getActionModifyGlobalReplicationGroupKey() {
  return ['#Action=ModifyGlobalReplicationGroup'] as const
}

export function getActionModifyReplicationGroupKey() {
  return ['#Action=ModifyReplicationGroup'] as const
}

export function getActionModifyReplicationGroupShardConfigurationKey() {
  return ['#Action=ModifyReplicationGroupShardConfiguration'] as const
}

export function getActionModifyUserKey() {
  return ['#Action=ModifyUser'] as const
}

export function getActionModifyUserGroupKey() {
  return ['#Action=ModifyUserGroup'] as const
}

export function getActionPurchaseReservedCacheNodesOfferingKey() {
  return ['#Action=PurchaseReservedCacheNodesOffering'] as const
}

export function getActionRebalanceSlotsInGlobalReplicationGroupKey() {
  return ['#Action=RebalanceSlotsInGlobalReplicationGroup'] as const
}

export function getActionRebootCacheClusterKey() {
  return ['#Action=RebootCacheCluster'] as const
}

export function getActionRemoveTagsFromResourceKey() {
  return ['#Action=RemoveTagsFromResource'] as const
}

export function getActionResetCacheParameterGroupKey() {
  return ['#Action=ResetCacheParameterGroup'] as const
}

export function getActionRevokeCacheSecurityGroupIngressKey() {
  return ['#Action=RevokeCacheSecurityGroupIngress'] as const
}

export function getActionStartMigrationKey() {
  return ['#Action=StartMigration'] as const
}

export function getActionTestFailoverKey() {
  return ['#Action=TestFailover'] as const
}

export function getActionAddTagsToResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddTagsToResource', '/#Action=AddTagsToResource', keyArgs] as const
}

export function getActionAddTagsToResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddTagsToResourceQueryKey>
  >({
    queryKey: getActionAddTagsToResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AddTagsToResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionAddTagsToResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAddTagsToResourceQueryKey>
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
      ...getActionAddTagsToResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionAddTagsToResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAddTagsToResourceQueryKey>
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
      ...getActionAddTagsToResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionAddTagsToResourceMutationKey() {
  return ['#Action=AddTagsToResource', '/#Action=AddTagsToResource', 'POST'] as const
}

export function getPostActionAddTagsToResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddTagsToResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddTagsToResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$post']>,
    ) {
      return parseResponse(client['#Action=AddTagsToResource'].$post(args, options))
    },
  })
}

export function usePostActionAddTagsToResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AddTagsToResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAddTagsToResourceMutationOptions<TError, TOnMutateResult>(
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

export function getActionAuthorizeCacheSecurityGroupIngressQueryKey(
  args: InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AuthorizeCacheSecurityGroupIngress',
    '/#Action=AuthorizeCacheSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionAuthorizeCacheSecurityGroupIngressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAuthorizeCacheSecurityGroupIngressQueryKey>
  >({
    queryKey: getActionAuthorizeCacheSecurityGroupIngressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AuthorizeCacheSecurityGroupIngress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionAuthorizeCacheSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAuthorizeCacheSecurityGroupIngressQueryKey>
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
      ...getActionAuthorizeCacheSecurityGroupIngressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionAuthorizeCacheSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAuthorizeCacheSecurityGroupIngressQueryKey>
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
      ...getActionAuthorizeCacheSecurityGroupIngressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionAuthorizeCacheSecurityGroupIngressMutationKey() {
  return [
    '#Action=AuthorizeCacheSecurityGroupIngress',
    '/#Action=AuthorizeCacheSecurityGroupIngress',
    'POST',
  ] as const
}

export function getPostActionAuthorizeCacheSecurityGroupIngressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAuthorizeCacheSecurityGroupIngressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=AuthorizeCacheSecurityGroupIngress'].$post(args, options),
      )
    },
  })
}

export function usePostActionAuthorizeCacheSecurityGroupIngress<
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
                ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAuthorizeCacheSecurityGroupIngressMutationOptions<
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

export function getActionBatchApplyUpdateActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=BatchApplyUpdateAction', '/#Action=BatchApplyUpdateAction', keyArgs] as const
}

export function getActionBatchApplyUpdateActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchApplyUpdateActionQueryKey>
  >({
    queryKey: getActionBatchApplyUpdateActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=BatchApplyUpdateAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionBatchApplyUpdateAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionBatchApplyUpdateActionQueryKey>
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
      ...getActionBatchApplyUpdateActionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionBatchApplyUpdateAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionBatchApplyUpdateActionQueryKey>
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
      ...getActionBatchApplyUpdateActionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionBatchApplyUpdateActionMutationKey() {
  return ['#Action=BatchApplyUpdateAction', '/#Action=BatchApplyUpdateAction', 'POST'] as const
}

export function getPostActionBatchApplyUpdateActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchApplyUpdateActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$post']>,
    ) {
      return parseResponse(client['#Action=BatchApplyUpdateAction'].$post(args, options))
    },
  })
}

export function usePostActionBatchApplyUpdateAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionBatchApplyUpdateActionMutationOptions<
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

export function getActionBatchStopUpdateActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=BatchStopUpdateAction', '/#Action=BatchStopUpdateAction', keyArgs] as const
}

export function getActionBatchStopUpdateActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchStopUpdateActionQueryKey>
  >({
    queryKey: getActionBatchStopUpdateActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=BatchStopUpdateAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionBatchStopUpdateAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionBatchStopUpdateActionQueryKey>
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
      ...getActionBatchStopUpdateActionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionBatchStopUpdateAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionBatchStopUpdateActionQueryKey>
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
      ...getActionBatchStopUpdateActionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionBatchStopUpdateActionMutationKey() {
  return ['#Action=BatchStopUpdateAction', '/#Action=BatchStopUpdateAction', 'POST'] as const
}

export function getPostActionBatchStopUpdateActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchStopUpdateActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$post']>,
    ) {
      return parseResponse(client['#Action=BatchStopUpdateAction'].$post(args, options))
    },
  })
}

export function usePostActionBatchStopUpdateAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionBatchStopUpdateActionMutationOptions<
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

export function getActionCompleteMigrationQueryKey(
  args: InferRequestType<(typeof client)['#Action=CompleteMigration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CompleteMigration', '/#Action=CompleteMigration', keyArgs] as const
}

export function getActionCompleteMigrationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CompleteMigration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCompleteMigrationQueryKey>
  >({
    queryKey: getActionCompleteMigrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CompleteMigration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCompleteMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CompleteMigration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCompleteMigrationQueryKey>
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
      ...getActionCompleteMigrationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCompleteMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CompleteMigration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCompleteMigrationQueryKey>
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
      ...getActionCompleteMigrationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCompleteMigrationMutationKey() {
  return ['#Action=CompleteMigration', '/#Action=CompleteMigration', 'POST'] as const
}

export function getPostActionCompleteMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CompleteMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCompleteMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CompleteMigration']['$post']>,
    ) {
      return parseResponse(client['#Action=CompleteMigration'].$post(args, options))
    },
  })
}

export function usePostActionCompleteMigration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CompleteMigration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCompleteMigrationMutationOptions<TError, TOnMutateResult>(
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

export function getActionCopySnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopySnapshot', '/#Action=CopySnapshot', keyArgs] as const
}

export function getActionCopySnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopySnapshotQueryKey>
  >({
    queryKey: getActionCopySnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CopySnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCopySnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCopySnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionCopySnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionCopySnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCopySnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionCopySnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionCopySnapshotMutationKey() {
  return ['#Action=CopySnapshot', '/#Action=CopySnapshot', 'POST'] as const
}

export function getPostActionCopySnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CopySnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCopySnapshotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$post']>) {
      return parseResponse(client['#Action=CopySnapshot'].$post(args, options))
    },
  })
}

export function usePostActionCopySnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CopySnapshot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCopySnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateCacheClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateCacheCluster', '/#Action=CreateCacheCluster', keyArgs] as const
}

export function getActionCreateCacheClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateCacheClusterQueryKey>
  >({
    queryKey: getActionCreateCacheClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateCacheCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateCacheCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCacheClusterQueryKey>
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
      ...getActionCreateCacheClusterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreateCacheCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCacheClusterQueryKey>
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
      ...getActionCreateCacheClusterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreateCacheClusterMutationKey() {
  return ['#Action=CreateCacheCluster', '/#Action=CreateCacheCluster', 'POST'] as const
}

export function getPostActionCreateCacheClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateCacheClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateCacheCluster'].$post(args, options))
    },
  })
}

export function usePostActionCreateCacheCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateCacheClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateCacheParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateCacheParameterGroup',
    '/#Action=CreateCacheParameterGroup',
    keyArgs,
  ] as const
}

export function getActionCreateCacheParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateCacheParameterGroupQueryKey>
  >({
    queryKey: getActionCreateCacheParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateCacheParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateCacheParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCacheParameterGroupQueryKey>
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
      ...getActionCreateCacheParameterGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreateCacheParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCacheParameterGroupQueryKey>
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
      ...getActionCreateCacheParameterGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreateCacheParameterGroupMutationKey() {
  return [
    '#Action=CreateCacheParameterGroup',
    '/#Action=CreateCacheParameterGroup',
    'POST',
  ] as const
}

export function getPostActionCreateCacheParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateCacheParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateCacheParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateCacheParameterGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateCacheParameterGroupMutationOptions<
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

export function getActionCreateCacheSecurityGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateCacheSecurityGroup', '/#Action=CreateCacheSecurityGroup', keyArgs] as const
}

export function getActionCreateCacheSecurityGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateCacheSecurityGroupQueryKey>
  >({
    queryKey: getActionCreateCacheSecurityGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateCacheSecurityGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateCacheSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCacheSecurityGroupQueryKey>
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
      ...getActionCreateCacheSecurityGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreateCacheSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCacheSecurityGroupQueryKey>
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
      ...getActionCreateCacheSecurityGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreateCacheSecurityGroupMutationKey() {
  return ['#Action=CreateCacheSecurityGroup', '/#Action=CreateCacheSecurityGroup', 'POST'] as const
}

export function getPostActionCreateCacheSecurityGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateCacheSecurityGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateCacheSecurityGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateCacheSecurityGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateCacheSecurityGroupMutationOptions<
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

export function getActionCreateCacheSubnetGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateCacheSubnetGroup', '/#Action=CreateCacheSubnetGroup', keyArgs] as const
}

export function getActionCreateCacheSubnetGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateCacheSubnetGroupQueryKey>
  >({
    queryKey: getActionCreateCacheSubnetGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateCacheSubnetGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateCacheSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCacheSubnetGroupQueryKey>
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
      ...getActionCreateCacheSubnetGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreateCacheSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateCacheSubnetGroupQueryKey>
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
      ...getActionCreateCacheSubnetGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreateCacheSubnetGroupMutationKey() {
  return ['#Action=CreateCacheSubnetGroup', '/#Action=CreateCacheSubnetGroup', 'POST'] as const
}

export function getPostActionCreateCacheSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateCacheSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateCacheSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateCacheSubnetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateCacheSubnetGroupMutationOptions<
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

export function getActionCreateGlobalReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateGlobalReplicationGroup',
    '/#Action=CreateGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionCreateGlobalReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateGlobalReplicationGroupQueryKey>
  >({
    queryKey: getActionCreateGlobalReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateGlobalReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateGlobalReplicationGroupQueryKey>
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
      ...getActionCreateGlobalReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreateGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateGlobalReplicationGroupQueryKey>
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
      ...getActionCreateGlobalReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreateGlobalReplicationGroupMutationKey() {
  return [
    '#Action=CreateGlobalReplicationGroup',
    '/#Action=CreateGlobalReplicationGroup',
    'POST',
  ] as const
}

export function getPostActionCreateGlobalReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateGlobalReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateGlobalReplicationGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateGlobalReplicationGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateGlobalReplicationGroupMutationOptions<
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

export function getActionCreateReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateReplicationGroup', '/#Action=CreateReplicationGroup', keyArgs] as const
}

export function getActionCreateReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateReplicationGroupQueryKey>
  >({
    queryKey: getActionCreateReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateReplicationGroupQueryKey>
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
      ...getActionCreateReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreateReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateReplicationGroupQueryKey>
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
      ...getActionCreateReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreateReplicationGroupMutationKey() {
  return ['#Action=CreateReplicationGroup', '/#Action=CreateReplicationGroup', 'POST'] as const
}

export function getPostActionCreateReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateReplicationGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateReplicationGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateReplicationGroupMutationOptions<
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

export function getActionCreateSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateSnapshot', '/#Action=CreateSnapshot', keyArgs] as const
}

export function getActionCreateSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateSnapshotQueryKey>
  >({
    queryKey: getActionCreateSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionCreateSnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionCreateSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionCreateSnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionCreateSnapshotMutationKey() {
  return ['#Action=CreateSnapshot', '/#Action=CreateSnapshot', 'POST'] as const
}

export function getPostActionCreateSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$post']>) {
      return parseResponse(client['#Action=CreateSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionCreateSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateSnapshot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateUserQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateUser', '/#Action=CreateUser', keyArgs] as const
}

export function getActionCreateUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateUserQueryKey>
  >({
    queryKey: getActionCreateUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateUser'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionCreateUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionCreateUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionCreateUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionCreateUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionCreateUserMutationKey() {
  return ['#Action=CreateUser', '/#Action=CreateUser', 'POST'] as const
}

export function getPostActionCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateUser']['$post']>) {
      return parseResponse(client['#Action=CreateUser'].$post(args, options))
    },
  })
}

export function usePostActionCreateUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateUserMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateUserGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateUserGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateUserGroup', '/#Action=CreateUserGroup', keyArgs] as const
}

export function getActionCreateUserGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateUserGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateUserGroupQueryKey>
  >({
    queryKey: getActionCreateUserGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateUserGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateUserGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateUserGroupQueryKey>
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
      ...getActionCreateUserGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreateUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateUserGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateUserGroupQueryKey>
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
      ...getActionCreateUserGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreateUserGroupMutationKey() {
  return ['#Action=CreateUserGroup', '/#Action=CreateUserGroup', 'POST'] as const
}

export function getPostActionCreateUserGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateUserGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateUserGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateUserGroup']['$post']>) {
      return parseResponse(client['#Action=CreateUserGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateUserGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateUserGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateUserGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryKey(
  args: InferRequestType<
    (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DecreaseNodeGroupsInGlobalReplicationGroup',
    '/#Action=DecreaseNodeGroupsInGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryKey>
  >({
    queryKey: getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DecreaseNodeGroupsInGlobalReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDecreaseNodeGroupsInGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryKey>
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
      ...getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDecreaseNodeGroupsInGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryKey>
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
      ...getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDecreaseNodeGroupsInGlobalReplicationGroupMutationKey() {
  return [
    '#Action=DecreaseNodeGroupsInGlobalReplicationGroup',
    '/#Action=DecreaseNodeGroupsInGlobalReplicationGroup',
    'POST',
  ] as const
}

export function getPostActionDecreaseNodeGroupsInGlobalReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostActionDecreaseNodeGroupsInGlobalReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DecreaseNodeGroupsInGlobalReplicationGroup'].$post(args, options),
      )
    },
  })
}

export function usePostActionDecreaseNodeGroupsInGlobalReplicationGroup<
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
                  (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$post']
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
  const mutationDefaults = getPostActionDecreaseNodeGroupsInGlobalReplicationGroupMutationOptions<
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

export function getActionDecreaseReplicaCountQueryKey(
  args: InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DecreaseReplicaCount', '/#Action=DecreaseReplicaCount', keyArgs] as const
}

export function getActionDecreaseReplicaCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDecreaseReplicaCountQueryKey>
  >({
    queryKey: getActionDecreaseReplicaCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DecreaseReplicaCount'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDecreaseReplicaCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDecreaseReplicaCountQueryKey>
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
      ...getActionDecreaseReplicaCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDecreaseReplicaCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDecreaseReplicaCountQueryKey>
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
      ...getActionDecreaseReplicaCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDecreaseReplicaCountMutationKey() {
  return ['#Action=DecreaseReplicaCount', '/#Action=DecreaseReplicaCount', 'POST'] as const
}

export function getPostActionDecreaseReplicaCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDecreaseReplicaCountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$post']>,
    ) {
      return parseResponse(client['#Action=DecreaseReplicaCount'].$post(args, options))
    },
  })
}

export function usePostActionDecreaseReplicaCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDecreaseReplicaCountMutationOptions<
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

export function getActionDeleteCacheClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteCacheCluster', '/#Action=DeleteCacheCluster', keyArgs] as const
}

export function getActionDeleteCacheClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteCacheClusterQueryKey>
  >({
    queryKey: getActionDeleteCacheClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteCacheCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteCacheCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCacheClusterQueryKey>
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
      ...getActionDeleteCacheClusterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteCacheCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCacheClusterQueryKey>
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
      ...getActionDeleteCacheClusterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteCacheClusterMutationKey() {
  return ['#Action=DeleteCacheCluster', '/#Action=DeleteCacheCluster', 'POST'] as const
}

export function getPostActionDeleteCacheClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteCacheClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteCacheCluster'].$post(args, options))
    },
  })
}

export function usePostActionDeleteCacheCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteCacheClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteCacheParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteCacheParameterGroup',
    '/#Action=DeleteCacheParameterGroup',
    keyArgs,
  ] as const
}

export function getActionDeleteCacheParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteCacheParameterGroupQueryKey>
  >({
    queryKey: getActionDeleteCacheParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteCacheParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteCacheParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCacheParameterGroupQueryKey>
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
      ...getActionDeleteCacheParameterGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteCacheParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCacheParameterGroupQueryKey>
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
      ...getActionDeleteCacheParameterGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteCacheParameterGroupMutationKey() {
  return [
    '#Action=DeleteCacheParameterGroup',
    '/#Action=DeleteCacheParameterGroup',
    'POST',
  ] as const
}

export function getPostActionDeleteCacheParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteCacheParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteCacheParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteCacheParameterGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteCacheParameterGroupMutationOptions<
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

export function getActionDeleteCacheSecurityGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteCacheSecurityGroup', '/#Action=DeleteCacheSecurityGroup', keyArgs] as const
}

export function getActionDeleteCacheSecurityGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteCacheSecurityGroupQueryKey>
  >({
    queryKey: getActionDeleteCacheSecurityGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteCacheSecurityGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteCacheSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCacheSecurityGroupQueryKey>
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
      ...getActionDeleteCacheSecurityGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteCacheSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCacheSecurityGroupQueryKey>
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
      ...getActionDeleteCacheSecurityGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteCacheSecurityGroupMutationKey() {
  return ['#Action=DeleteCacheSecurityGroup', '/#Action=DeleteCacheSecurityGroup', 'POST'] as const
}

export function getPostActionDeleteCacheSecurityGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteCacheSecurityGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteCacheSecurityGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteCacheSecurityGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteCacheSecurityGroupMutationOptions<
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

export function getActionDeleteCacheSubnetGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteCacheSubnetGroup', '/#Action=DeleteCacheSubnetGroup', keyArgs] as const
}

export function getActionDeleteCacheSubnetGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteCacheSubnetGroupQueryKey>
  >({
    queryKey: getActionDeleteCacheSubnetGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteCacheSubnetGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteCacheSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCacheSubnetGroupQueryKey>
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
      ...getActionDeleteCacheSubnetGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteCacheSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteCacheSubnetGroupQueryKey>
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
      ...getActionDeleteCacheSubnetGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteCacheSubnetGroupMutationKey() {
  return ['#Action=DeleteCacheSubnetGroup', '/#Action=DeleteCacheSubnetGroup', 'POST'] as const
}

export function getPostActionDeleteCacheSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteCacheSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteCacheSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteCacheSubnetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteCacheSubnetGroupMutationOptions<
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

export function getActionDeleteGlobalReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteGlobalReplicationGroup',
    '/#Action=DeleteGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionDeleteGlobalReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteGlobalReplicationGroupQueryKey>
  >({
    queryKey: getActionDeleteGlobalReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteGlobalReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteGlobalReplicationGroupQueryKey>
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
      ...getActionDeleteGlobalReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteGlobalReplicationGroupQueryKey>
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
      ...getActionDeleteGlobalReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteGlobalReplicationGroupMutationKey() {
  return [
    '#Action=DeleteGlobalReplicationGroup',
    '/#Action=DeleteGlobalReplicationGroup',
    'POST',
  ] as const
}

export function getPostActionDeleteGlobalReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteGlobalReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteGlobalReplicationGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteGlobalReplicationGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteGlobalReplicationGroupMutationOptions<
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

export function getActionDeleteReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteReplicationGroup', '/#Action=DeleteReplicationGroup', keyArgs] as const
}

export function getActionDeleteReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteReplicationGroupQueryKey>
  >({
    queryKey: getActionDeleteReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteReplicationGroupQueryKey>
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
      ...getActionDeleteReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteReplicationGroupQueryKey>
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
      ...getActionDeleteReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteReplicationGroupMutationKey() {
  return ['#Action=DeleteReplicationGroup', '/#Action=DeleteReplicationGroup', 'POST'] as const
}

export function getPostActionDeleteReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteReplicationGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteReplicationGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteReplicationGroupMutationOptions<
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

export function getActionDeleteSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteSnapshot', '/#Action=DeleteSnapshot', keyArgs] as const
}

export function getActionDeleteSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSnapshotQueryKey>
  >({
    queryKey: getActionDeleteSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionDeleteSnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionDeleteSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteSnapshotQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionDeleteSnapshotQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionDeleteSnapshotMutationKey() {
  return ['#Action=DeleteSnapshot', '/#Action=DeleteSnapshot', 'POST'] as const
}

export function getPostActionDeleteSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$post']>) {
      return parseResponse(client['#Action=DeleteSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionDeleteSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteUserQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteUser', '/#Action=DeleteUser', keyArgs] as const
}

export function getActionDeleteUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteUserQueryKey>
  >({
    queryKey: getActionDeleteUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteUser'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionDeleteUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionDeleteUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionDeleteUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionDeleteUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionDeleteUserMutationKey() {
  return ['#Action=DeleteUser', '/#Action=DeleteUser', 'POST'] as const
}

export function getPostActionDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>) {
      return parseResponse(client['#Action=DeleteUser'].$post(args, options))
    },
  })
}

export function usePostActionDeleteUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteUserMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteUserGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteUserGroup', '/#Action=DeleteUserGroup', keyArgs] as const
}

export function getActionDeleteUserGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteUserGroupQueryKey>
  >({
    queryKey: getActionDeleteUserGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteUserGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteUserGroupQueryKey>
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
      ...getActionDeleteUserGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteUserGroupQueryKey>
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
      ...getActionDeleteUserGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteUserGroupMutationKey() {
  return ['#Action=DeleteUserGroup', '/#Action=DeleteUserGroup', 'POST'] as const
}

export function getPostActionDeleteUserGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteUserGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$post']>) {
      return parseResponse(client['#Action=DeleteUserGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteUserGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteUserGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeCacheClustersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeCacheClusters', '/#Action=DescribeCacheClusters', keyArgs] as const
}

export function getActionDescribeCacheClustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeCacheClustersQueryKey>
  >({
    queryKey: getActionDescribeCacheClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeCacheClusters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeCacheClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheClustersQueryKey>
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
      ...getActionDescribeCacheClustersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeCacheClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheClustersQueryKey>
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
      ...getActionDescribeCacheClustersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeCacheClustersMutationKey() {
  return ['#Action=DescribeCacheClusters', '/#Action=DescribeCacheClusters', 'POST'] as const
}

export function getPostActionDescribeCacheClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeCacheClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeCacheClusters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeCacheClusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeCacheClustersMutationOptions<
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

export function getActionDescribeCacheEngineVersionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeCacheEngineVersions',
    '/#Action=DescribeCacheEngineVersions',
    keyArgs,
  ] as const
}

export function getActionDescribeCacheEngineVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeCacheEngineVersionsQueryKey>
  >({
    queryKey: getActionDescribeCacheEngineVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeCacheEngineVersions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeCacheEngineVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheEngineVersionsQueryKey>
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
      ...getActionDescribeCacheEngineVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeCacheEngineVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheEngineVersionsQueryKey>
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
      ...getActionDescribeCacheEngineVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeCacheEngineVersionsMutationKey() {
  return [
    '#Action=DescribeCacheEngineVersions',
    '/#Action=DescribeCacheEngineVersions',
    'POST',
  ] as const
}

export function getPostActionDescribeCacheEngineVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeCacheEngineVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeCacheEngineVersions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeCacheEngineVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeCacheEngineVersionsMutationOptions<
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

export function getActionDescribeCacheParameterGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeCacheParameterGroups',
    '/#Action=DescribeCacheParameterGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeCacheParameterGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeCacheParameterGroupsQueryKey>
  >({
    queryKey: getActionDescribeCacheParameterGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeCacheParameterGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeCacheParameterGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheParameterGroupsQueryKey>
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
      ...getActionDescribeCacheParameterGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeCacheParameterGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheParameterGroupsQueryKey>
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
      ...getActionDescribeCacheParameterGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeCacheParameterGroupsMutationKey() {
  return [
    '#Action=DescribeCacheParameterGroups',
    '/#Action=DescribeCacheParameterGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeCacheParameterGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeCacheParameterGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeCacheParameterGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeCacheParameterGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeCacheParameterGroupsMutationOptions<
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

export function getActionDescribeCacheParametersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeCacheParameters', '/#Action=DescribeCacheParameters', keyArgs] as const
}

export function getActionDescribeCacheParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeCacheParametersQueryKey>
  >({
    queryKey: getActionDescribeCacheParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeCacheParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeCacheParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheParametersQueryKey>
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
      ...getActionDescribeCacheParametersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeCacheParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheParametersQueryKey>
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
      ...getActionDescribeCacheParametersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeCacheParametersMutationKey() {
  return ['#Action=DescribeCacheParameters', '/#Action=DescribeCacheParameters', 'POST'] as const
}

export function getPostActionDescribeCacheParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeCacheParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeCacheParameters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeCacheParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeCacheParametersMutationOptions<
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

export function getActionDescribeCacheSecurityGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeCacheSecurityGroups',
    '/#Action=DescribeCacheSecurityGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeCacheSecurityGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeCacheSecurityGroupsQueryKey>
  >({
    queryKey: getActionDescribeCacheSecurityGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeCacheSecurityGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeCacheSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheSecurityGroupsQueryKey>
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
      ...getActionDescribeCacheSecurityGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeCacheSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheSecurityGroupsQueryKey>
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
      ...getActionDescribeCacheSecurityGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeCacheSecurityGroupsMutationKey() {
  return [
    '#Action=DescribeCacheSecurityGroups',
    '/#Action=DescribeCacheSecurityGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeCacheSecurityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeCacheSecurityGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeCacheSecurityGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeCacheSecurityGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeCacheSecurityGroupsMutationOptions<
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

export function getActionDescribeCacheSubnetGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeCacheSubnetGroups',
    '/#Action=DescribeCacheSubnetGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeCacheSubnetGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeCacheSubnetGroupsQueryKey>
  >({
    queryKey: getActionDescribeCacheSubnetGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeCacheSubnetGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeCacheSubnetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheSubnetGroupsQueryKey>
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
      ...getActionDescribeCacheSubnetGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeCacheSubnetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeCacheSubnetGroupsQueryKey>
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
      ...getActionDescribeCacheSubnetGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeCacheSubnetGroupsMutationKey() {
  return [
    '#Action=DescribeCacheSubnetGroups',
    '/#Action=DescribeCacheSubnetGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeCacheSubnetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeCacheSubnetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeCacheSubnetGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeCacheSubnetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeCacheSubnetGroupsMutationOptions<
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

export function getActionDescribeEngineDefaultParametersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEngineDefaultParameters',
    '/#Action=DescribeEngineDefaultParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeEngineDefaultParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEngineDefaultParametersQueryKey>
  >({
    queryKey: getActionDescribeEngineDefaultParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEngineDefaultParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeEngineDefaultParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeEngineDefaultParametersQueryKey>
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
      ...getActionDescribeEngineDefaultParametersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeEngineDefaultParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeEngineDefaultParametersQueryKey>
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
      ...getActionDescribeEngineDefaultParametersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeEngineDefaultParametersMutationKey() {
  return [
    '#Action=DescribeEngineDefaultParameters',
    '/#Action=DescribeEngineDefaultParameters',
    'POST',
  ] as const
}

export function getPostActionDescribeEngineDefaultParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEngineDefaultParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEngineDefaultParameters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEngineDefaultParameters<
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
                ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeEngineDefaultParametersMutationOptions<
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

export function getActionDescribeEventsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', keyArgs] as const
}

export function getActionDescribeEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventsQueryKey>
  >({
    queryKey: getActionDescribeEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEvents'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionDescribeEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionDescribeEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionDescribeEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionDescribeEventsMutationKey() {
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', 'POST'] as const
}

export function getPostActionDescribeEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEventsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>) {
      return parseResponse(client['#Action=DescribeEvents'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeEventsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeGlobalReplicationGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeGlobalReplicationGroups',
    '/#Action=DescribeGlobalReplicationGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeGlobalReplicationGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeGlobalReplicationGroupsQueryKey>
  >({
    queryKey: getActionDescribeGlobalReplicationGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeGlobalReplicationGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeGlobalReplicationGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeGlobalReplicationGroupsQueryKey>
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
      ...getActionDescribeGlobalReplicationGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeGlobalReplicationGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeGlobalReplicationGroupsQueryKey>
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
      ...getActionDescribeGlobalReplicationGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeGlobalReplicationGroupsMutationKey() {
  return [
    '#Action=DescribeGlobalReplicationGroups',
    '/#Action=DescribeGlobalReplicationGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeGlobalReplicationGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeGlobalReplicationGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeGlobalReplicationGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeGlobalReplicationGroups<
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
                ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeGlobalReplicationGroupsMutationOptions<
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

export function getActionDescribeReplicationGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReplicationGroups',
    '/#Action=DescribeReplicationGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeReplicationGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReplicationGroupsQueryKey>
  >({
    queryKey: getActionDescribeReplicationGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeReplicationGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeReplicationGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeReplicationGroupsQueryKey>
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
      ...getActionDescribeReplicationGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeReplicationGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeReplicationGroupsQueryKey>
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
      ...getActionDescribeReplicationGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeReplicationGroupsMutationKey() {
  return [
    '#Action=DescribeReplicationGroups',
    '/#Action=DescribeReplicationGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeReplicationGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReplicationGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeReplicationGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeReplicationGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeReplicationGroupsMutationOptions<
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

export function getActionDescribeReservedCacheNodesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReservedCacheNodes',
    '/#Action=DescribeReservedCacheNodes',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedCacheNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReservedCacheNodesQueryKey>
  >({
    queryKey: getActionDescribeReservedCacheNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeReservedCacheNodes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeReservedCacheNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeReservedCacheNodesQueryKey>
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
      ...getActionDescribeReservedCacheNodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeReservedCacheNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeReservedCacheNodesQueryKey>
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
      ...getActionDescribeReservedCacheNodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeReservedCacheNodesMutationKey() {
  return [
    '#Action=DescribeReservedCacheNodes',
    '/#Action=DescribeReservedCacheNodes',
    'POST',
  ] as const
}

export function getPostActionDescribeReservedCacheNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReservedCacheNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeReservedCacheNodes'].$post(args, options))
    },
  })
}

export function usePostActionDescribeReservedCacheNodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeReservedCacheNodesMutationOptions<
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

export function getActionDescribeReservedCacheNodesOfferingsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReservedCacheNodesOfferings',
    '/#Action=DescribeReservedCacheNodesOfferings',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedCacheNodesOfferingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReservedCacheNodesOfferingsQueryKey>
  >({
    queryKey: getActionDescribeReservedCacheNodesOfferingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeReservedCacheNodesOfferings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeReservedCacheNodesOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeReservedCacheNodesOfferingsQueryKey>
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
      ...getActionDescribeReservedCacheNodesOfferingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeReservedCacheNodesOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeReservedCacheNodesOfferingsQueryKey>
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
      ...getActionDescribeReservedCacheNodesOfferingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeReservedCacheNodesOfferingsMutationKey() {
  return [
    '#Action=DescribeReservedCacheNodesOfferings',
    '/#Action=DescribeReservedCacheNodesOfferings',
    'POST',
  ] as const
}

export function getPostActionDescribeReservedCacheNodesOfferingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReservedCacheNodesOfferingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeReservedCacheNodesOfferings'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeReservedCacheNodesOfferings<
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
                ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeReservedCacheNodesOfferingsMutationOptions<
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

export function getActionDescribeServiceUpdatesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeServiceUpdates', '/#Action=DescribeServiceUpdates', keyArgs] as const
}

export function getActionDescribeServiceUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeServiceUpdatesQueryKey>
  >({
    queryKey: getActionDescribeServiceUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeServiceUpdates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeServiceUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeServiceUpdatesQueryKey>
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
      ...getActionDescribeServiceUpdatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeServiceUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeServiceUpdatesQueryKey>
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
      ...getActionDescribeServiceUpdatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeServiceUpdatesMutationKey() {
  return ['#Action=DescribeServiceUpdates', '/#Action=DescribeServiceUpdates', 'POST'] as const
}

export function getPostActionDescribeServiceUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeServiceUpdatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeServiceUpdates'].$post(args, options))
    },
  })
}

export function usePostActionDescribeServiceUpdates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeServiceUpdatesMutationOptions<
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

export function getActionDescribeSnapshotsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeSnapshots', '/#Action=DescribeSnapshots', keyArgs] as const
}

export function getActionDescribeSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeSnapshotsQueryKey>
  >({
    queryKey: getActionDescribeSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeSnapshots'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeSnapshotsQueryKey>
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
      ...getActionDescribeSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeSnapshotsQueryKey>
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
      ...getActionDescribeSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeSnapshotsMutationKey() {
  return ['#Action=DescribeSnapshots', '/#Action=DescribeSnapshots', 'POST'] as const
}

export function getPostActionDescribeSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeSnapshots'].$post(args, options))
    },
  })
}

export function usePostActionDescribeSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeSnapshotsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeUpdateActionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeUpdateActions', '/#Action=DescribeUpdateActions', keyArgs] as const
}

export function getActionDescribeUpdateActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeUpdateActionsQueryKey>
  >({
    queryKey: getActionDescribeUpdateActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeUpdateActions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeUpdateActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeUpdateActionsQueryKey>
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
      ...getActionDescribeUpdateActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeUpdateActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeUpdateActionsQueryKey>
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
      ...getActionDescribeUpdateActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeUpdateActionsMutationKey() {
  return ['#Action=DescribeUpdateActions', '/#Action=DescribeUpdateActions', 'POST'] as const
}

export function getPostActionDescribeUpdateActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeUpdateActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeUpdateActions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeUpdateActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeUpdateActionsMutationOptions<
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

export function getActionDescribeUserGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeUserGroups', '/#Action=DescribeUserGroups', keyArgs] as const
}

export function getActionDescribeUserGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeUserGroupsQueryKey>
  >({
    queryKey: getActionDescribeUserGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeUserGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeUserGroupsQueryKey>
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
      ...getActionDescribeUserGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDescribeUserGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeUserGroupsQueryKey>
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
      ...getActionDescribeUserGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDescribeUserGroupsMutationKey() {
  return ['#Action=DescribeUserGroups', '/#Action=DescribeUserGroups', 'POST'] as const
}

export function getPostActionDescribeUserGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeUserGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeUserGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeUserGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeUserGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeUsersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeUsers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeUsers', '/#Action=DescribeUsers', keyArgs] as const
}

export function getActionDescribeUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeUsersQueryKey>
  >({
    queryKey: getActionDescribeUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeUsers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDescribeUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUsers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionDescribeUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionDescribeUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeUsers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionDescribeUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionDescribeUsersMutationKey() {
  return ['#Action=DescribeUsers', '/#Action=DescribeUsers', 'POST'] as const
}

export function getPostActionDescribeUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeUsers']['$post']>) {
      return parseResponse(client['#Action=DescribeUsers'].$post(args, options))
    },
  })
}

export function usePostActionDescribeUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeUsers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeUsersMutationOptions<TError, TOnMutateResult>(
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

export function getActionDisassociateGlobalReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DisassociateGlobalReplicationGroup',
    '/#Action=DisassociateGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionDisassociateGlobalReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDisassociateGlobalReplicationGroupQueryKey>
  >({
    queryKey: getActionDisassociateGlobalReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DisassociateGlobalReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDisassociateGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDisassociateGlobalReplicationGroupQueryKey>
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
      ...getActionDisassociateGlobalReplicationGroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDisassociateGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDisassociateGlobalReplicationGroupQueryKey>
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
      ...getActionDisassociateGlobalReplicationGroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDisassociateGlobalReplicationGroupMutationKey() {
  return [
    '#Action=DisassociateGlobalReplicationGroup',
    '/#Action=DisassociateGlobalReplicationGroup',
    'POST',
  ] as const
}

export function getPostActionDisassociateGlobalReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDisassociateGlobalReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DisassociateGlobalReplicationGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DisassociateGlobalReplicationGroup'].$post(args, options),
      )
    },
  })
}

export function usePostActionDisassociateGlobalReplicationGroup<
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
                ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDisassociateGlobalReplicationGroupMutationOptions<
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

export function getActionFailoverGlobalReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=FailoverGlobalReplicationGroup',
    '/#Action=FailoverGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionFailoverGlobalReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionFailoverGlobalReplicationGroupQueryKey>
  >({
    queryKey: getActionFailoverGlobalReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=FailoverGlobalReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionFailoverGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionFailoverGlobalReplicationGroupQueryKey>
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
      ...getActionFailoverGlobalReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionFailoverGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionFailoverGlobalReplicationGroupQueryKey>
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
      ...getActionFailoverGlobalReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionFailoverGlobalReplicationGroupMutationKey() {
  return [
    '#Action=FailoverGlobalReplicationGroup',
    '/#Action=FailoverGlobalReplicationGroup',
    'POST',
  ] as const
}

export function getPostActionFailoverGlobalReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionFailoverGlobalReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=FailoverGlobalReplicationGroup'].$post(args, options))
    },
  })
}

export function usePostActionFailoverGlobalReplicationGroup<
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
                ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionFailoverGlobalReplicationGroupMutationOptions<
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

export function getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryKey(
  args: InferRequestType<
    (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=IncreaseNodeGroupsInGlobalReplicationGroup',
    '/#Action=IncreaseNodeGroupsInGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryKey>
  >({
    queryKey: getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=IncreaseNodeGroupsInGlobalReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionIncreaseNodeGroupsInGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryKey>
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
      ...getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionIncreaseNodeGroupsInGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryKey>
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
      ...getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionIncreaseNodeGroupsInGlobalReplicationGroupMutationKey() {
  return [
    '#Action=IncreaseNodeGroupsInGlobalReplicationGroup',
    '/#Action=IncreaseNodeGroupsInGlobalReplicationGroup',
    'POST',
  ] as const
}

export function getPostActionIncreaseNodeGroupsInGlobalReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostActionIncreaseNodeGroupsInGlobalReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=IncreaseNodeGroupsInGlobalReplicationGroup'].$post(args, options),
      )
    },
  })
}

export function usePostActionIncreaseNodeGroupsInGlobalReplicationGroup<
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
                  (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$post']
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
  const mutationDefaults = getPostActionIncreaseNodeGroupsInGlobalReplicationGroupMutationOptions<
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

export function getActionIncreaseReplicaCountQueryKey(
  args: InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=IncreaseReplicaCount', '/#Action=IncreaseReplicaCount', keyArgs] as const
}

export function getActionIncreaseReplicaCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionIncreaseReplicaCountQueryKey>
  >({
    queryKey: getActionIncreaseReplicaCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=IncreaseReplicaCount'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionIncreaseReplicaCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionIncreaseReplicaCountQueryKey>
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
      ...getActionIncreaseReplicaCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionIncreaseReplicaCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionIncreaseReplicaCountQueryKey>
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
      ...getActionIncreaseReplicaCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionIncreaseReplicaCountMutationKey() {
  return ['#Action=IncreaseReplicaCount', '/#Action=IncreaseReplicaCount', 'POST'] as const
}

export function getPostActionIncreaseReplicaCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionIncreaseReplicaCountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$post']>,
    ) {
      return parseResponse(client['#Action=IncreaseReplicaCount'].$post(args, options))
    },
  })
}

export function usePostActionIncreaseReplicaCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionIncreaseReplicaCountMutationOptions<
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

export function getActionListAllowedNodeTypeModificationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListAllowedNodeTypeModifications',
    '/#Action=ListAllowedNodeTypeModifications',
    keyArgs,
  ] as const
}

export function getActionListAllowedNodeTypeModificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListAllowedNodeTypeModificationsQueryKey>
  >({
    queryKey: getActionListAllowedNodeTypeModificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListAllowedNodeTypeModifications'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListAllowedNodeTypeModifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListAllowedNodeTypeModificationsQueryKey>
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
      ...getActionListAllowedNodeTypeModificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListAllowedNodeTypeModifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListAllowedNodeTypeModificationsQueryKey>
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
      ...getActionListAllowedNodeTypeModificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListAllowedNodeTypeModificationsMutationKey() {
  return [
    '#Action=ListAllowedNodeTypeModifications',
    '/#Action=ListAllowedNodeTypeModifications',
    'POST',
  ] as const
}

export function getPostActionListAllowedNodeTypeModificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListAllowedNodeTypeModificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$post']>,
    ) {
      return parseResponse(client['#Action=ListAllowedNodeTypeModifications'].$post(args, options))
    },
  })
}

export function usePostActionListAllowedNodeTypeModifications<
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
                ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListAllowedNodeTypeModificationsMutationOptions<
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

export function getActionListTagsForResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function getActionListTagsForResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTagsForResourceQueryKey>
  >({
    queryKey: getActionListTagsForResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTagsForResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTagsForResourceQueryKey>
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
      ...getActionListTagsForResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTagsForResourceQueryKey>
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
      ...getActionListTagsForResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListTagsForResourceMutationKey() {
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', 'POST'] as const
}

export function getPostActionListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
    ) {
      return parseResponse(client['#Action=ListTagsForResource'].$post(args, options))
    },
  })
}

export function usePostActionListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListTagsForResourceMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyCacheClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyCacheCluster', '/#Action=ModifyCacheCluster', keyArgs] as const
}

export function getActionModifyCacheClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyCacheClusterQueryKey>
  >({
    queryKey: getActionModifyCacheClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyCacheCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionModifyCacheCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyCacheClusterQueryKey>
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
      ...getActionModifyCacheClusterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionModifyCacheCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyCacheClusterQueryKey>
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
      ...getActionModifyCacheClusterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionModifyCacheClusterMutationKey() {
  return ['#Action=ModifyCacheCluster', '/#Action=ModifyCacheCluster', 'POST'] as const
}

export function getPostActionModifyCacheClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyCacheClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyCacheCluster'].$post(args, options))
    },
  })
}

export function usePostActionModifyCacheCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionModifyCacheClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyCacheParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyCacheParameterGroup',
    '/#Action=ModifyCacheParameterGroup',
    keyArgs,
  ] as const
}

export function getActionModifyCacheParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyCacheParameterGroupQueryKey>
  >({
    queryKey: getActionModifyCacheParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyCacheParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionModifyCacheParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyCacheParameterGroupQueryKey>
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
      ...getActionModifyCacheParameterGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionModifyCacheParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyCacheParameterGroupQueryKey>
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
      ...getActionModifyCacheParameterGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionModifyCacheParameterGroupMutationKey() {
  return [
    '#Action=ModifyCacheParameterGroup',
    '/#Action=ModifyCacheParameterGroup',
    'POST',
  ] as const
}

export function getPostActionModifyCacheParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyCacheParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyCacheParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyCacheParameterGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionModifyCacheParameterGroupMutationOptions<
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

export function getActionModifyCacheSubnetGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyCacheSubnetGroup', '/#Action=ModifyCacheSubnetGroup', keyArgs] as const
}

export function getActionModifyCacheSubnetGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyCacheSubnetGroupQueryKey>
  >({
    queryKey: getActionModifyCacheSubnetGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyCacheSubnetGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionModifyCacheSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyCacheSubnetGroupQueryKey>
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
      ...getActionModifyCacheSubnetGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionModifyCacheSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyCacheSubnetGroupQueryKey>
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
      ...getActionModifyCacheSubnetGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionModifyCacheSubnetGroupMutationKey() {
  return ['#Action=ModifyCacheSubnetGroup', '/#Action=ModifyCacheSubnetGroup', 'POST'] as const
}

export function getPostActionModifyCacheSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyCacheSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyCacheSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyCacheSubnetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionModifyCacheSubnetGroupMutationOptions<
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

export function getActionModifyGlobalReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyGlobalReplicationGroup',
    '/#Action=ModifyGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionModifyGlobalReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyGlobalReplicationGroupQueryKey>
  >({
    queryKey: getActionModifyGlobalReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyGlobalReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionModifyGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyGlobalReplicationGroupQueryKey>
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
      ...getActionModifyGlobalReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionModifyGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyGlobalReplicationGroupQueryKey>
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
      ...getActionModifyGlobalReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionModifyGlobalReplicationGroupMutationKey() {
  return [
    '#Action=ModifyGlobalReplicationGroup',
    '/#Action=ModifyGlobalReplicationGroup',
    'POST',
  ] as const
}

export function getPostActionModifyGlobalReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyGlobalReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyGlobalReplicationGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyGlobalReplicationGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionModifyGlobalReplicationGroupMutationOptions<
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

export function getActionModifyReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyReplicationGroup', '/#Action=ModifyReplicationGroup', keyArgs] as const
}

export function getActionModifyReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyReplicationGroupQueryKey>
  >({
    queryKey: getActionModifyReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionModifyReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyReplicationGroupQueryKey>
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
      ...getActionModifyReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionModifyReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyReplicationGroupQueryKey>
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
      ...getActionModifyReplicationGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionModifyReplicationGroupMutationKey() {
  return ['#Action=ModifyReplicationGroup', '/#Action=ModifyReplicationGroup', 'POST'] as const
}

export function getPostActionModifyReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyReplicationGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyReplicationGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionModifyReplicationGroupMutationOptions<
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

export function getActionModifyReplicationGroupShardConfigurationQueryKey(
  args: InferRequestType<
    (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyReplicationGroupShardConfiguration',
    '/#Action=ModifyReplicationGroupShardConfiguration',
    keyArgs,
  ] as const
}

export function getActionModifyReplicationGroupShardConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyReplicationGroupShardConfigurationQueryKey>
  >({
    queryKey: getActionModifyReplicationGroupShardConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyReplicationGroupShardConfiguration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionModifyReplicationGroupShardConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyReplicationGroupShardConfigurationQueryKey>
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
      ...getActionModifyReplicationGroupShardConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionModifyReplicationGroupShardConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyReplicationGroupShardConfigurationQueryKey>
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
      ...getActionModifyReplicationGroupShardConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionModifyReplicationGroupShardConfigurationMutationKey() {
  return [
    '#Action=ModifyReplicationGroupShardConfiguration',
    '/#Action=ModifyReplicationGroupShardConfiguration',
    'POST',
  ] as const
}

export function getPostActionModifyReplicationGroupShardConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyReplicationGroupShardConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=ModifyReplicationGroupShardConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostActionModifyReplicationGroupShardConfiguration<
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
                  (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$post']
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
  const mutationDefaults = getPostActionModifyReplicationGroupShardConfigurationMutationOptions<
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

export function getActionModifyUserQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyUser', '/#Action=ModifyUser', keyArgs] as const
}

export function getActionModifyUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyUserQueryKey>
  >({
    queryKey: getActionModifyUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyUser'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionModifyUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyUser']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionModifyUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionModifyUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyUser']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionModifyUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionModifyUserMutationKey() {
  return ['#Action=ModifyUser', '/#Action=ModifyUser', 'POST'] as const
}

export function getPostActionModifyUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyUser']['$post']>) {
      return parseResponse(client['#Action=ModifyUser'].$post(args, options))
    },
  })
}

export function usePostActionModifyUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ModifyUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionModifyUserMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyUserGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyUserGroup', '/#Action=ModifyUserGroup', keyArgs] as const
}

export function getActionModifyUserGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyUserGroupQueryKey>
  >({
    queryKey: getActionModifyUserGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyUserGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionModifyUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyUserGroupQueryKey>
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
      ...getActionModifyUserGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionModifyUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionModifyUserGroupQueryKey>
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
      ...getActionModifyUserGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionModifyUserGroupMutationKey() {
  return ['#Action=ModifyUserGroup', '/#Action=ModifyUserGroup', 'POST'] as const
}

export function getPostActionModifyUserGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyUserGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$post']>) {
      return parseResponse(client['#Action=ModifyUserGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyUserGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionModifyUserGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionPurchaseReservedCacheNodesOfferingQueryKey(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PurchaseReservedCacheNodesOffering',
    '/#Action=PurchaseReservedCacheNodesOffering',
    keyArgs,
  ] as const
}

export function getActionPurchaseReservedCacheNodesOfferingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPurchaseReservedCacheNodesOfferingQueryKey>
  >({
    queryKey: getActionPurchaseReservedCacheNodesOfferingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PurchaseReservedCacheNodesOffering'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPurchaseReservedCacheNodesOffering<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPurchaseReservedCacheNodesOfferingQueryKey>
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
      ...getActionPurchaseReservedCacheNodesOfferingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionPurchaseReservedCacheNodesOffering<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPurchaseReservedCacheNodesOfferingQueryKey>
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
      ...getActionPurchaseReservedCacheNodesOfferingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionPurchaseReservedCacheNodesOfferingMutationKey() {
  return [
    '#Action=PurchaseReservedCacheNodesOffering',
    '/#Action=PurchaseReservedCacheNodesOffering',
    'POST',
  ] as const
}

export function getPostActionPurchaseReservedCacheNodesOfferingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPurchaseReservedCacheNodesOfferingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=PurchaseReservedCacheNodesOffering'].$post(args, options),
      )
    },
  })
}

export function usePostActionPurchaseReservedCacheNodesOffering<
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
                ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPurchaseReservedCacheNodesOfferingMutationOptions<
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

export function getActionRebalanceSlotsInGlobalReplicationGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RebalanceSlotsInGlobalReplicationGroup',
    '/#Action=RebalanceSlotsInGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionRebalanceSlotsInGlobalReplicationGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRebalanceSlotsInGlobalReplicationGroupQueryKey>
  >({
    queryKey: getActionRebalanceSlotsInGlobalReplicationGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RebalanceSlotsInGlobalReplicationGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionRebalanceSlotsInGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRebalanceSlotsInGlobalReplicationGroupQueryKey>
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
      ...getActionRebalanceSlotsInGlobalReplicationGroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionRebalanceSlotsInGlobalReplicationGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRebalanceSlotsInGlobalReplicationGroupQueryKey>
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
      ...getActionRebalanceSlotsInGlobalReplicationGroupQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionRebalanceSlotsInGlobalReplicationGroupMutationKey() {
  return [
    '#Action=RebalanceSlotsInGlobalReplicationGroup',
    '/#Action=RebalanceSlotsInGlobalReplicationGroup',
    'POST',
  ] as const
}

export function getPostActionRebalanceSlotsInGlobalReplicationGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRebalanceSlotsInGlobalReplicationGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=RebalanceSlotsInGlobalReplicationGroup'].$post(args, options),
      )
    },
  })
}

export function usePostActionRebalanceSlotsInGlobalReplicationGroup<
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
                  (typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$post']
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
  const mutationDefaults = getPostActionRebalanceSlotsInGlobalReplicationGroupMutationOptions<
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

export function getActionRebootCacheClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RebootCacheCluster', '/#Action=RebootCacheCluster', keyArgs] as const
}

export function getActionRebootCacheClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRebootCacheClusterQueryKey>
  >({
    queryKey: getActionRebootCacheClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RebootCacheCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionRebootCacheCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRebootCacheClusterQueryKey>
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
      ...getActionRebootCacheClusterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionRebootCacheCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRebootCacheClusterQueryKey>
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
      ...getActionRebootCacheClusterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionRebootCacheClusterMutationKey() {
  return ['#Action=RebootCacheCluster', '/#Action=RebootCacheCluster', 'POST'] as const
}

export function getPostActionRebootCacheClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRebootCacheClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=RebootCacheCluster'].$post(args, options))
    },
  })
}

export function usePostActionRebootCacheCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRebootCacheClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionRemoveTagsFromResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveTagsFromResource', '/#Action=RemoveTagsFromResource', keyArgs] as const
}

export function getActionRemoveTagsFromResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveTagsFromResourceQueryKey>
  >({
    queryKey: getActionRemoveTagsFromResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RemoveTagsFromResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionRemoveTagsFromResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRemoveTagsFromResourceQueryKey>
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
      ...getActionRemoveTagsFromResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionRemoveTagsFromResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRemoveTagsFromResourceQueryKey>
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
      ...getActionRemoveTagsFromResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionRemoveTagsFromResourceMutationKey() {
  return ['#Action=RemoveTagsFromResource', '/#Action=RemoveTagsFromResource', 'POST'] as const
}

export function getPostActionRemoveTagsFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveTagsFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>,
    ) {
      return parseResponse(client['#Action=RemoveTagsFromResource'].$post(args, options))
    },
  })
}

export function usePostActionRemoveTagsFromResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRemoveTagsFromResourceMutationOptions<
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

export function getActionResetCacheParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ResetCacheParameterGroup', '/#Action=ResetCacheParameterGroup', keyArgs] as const
}

export function getActionResetCacheParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResetCacheParameterGroupQueryKey>
  >({
    queryKey: getActionResetCacheParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ResetCacheParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionResetCacheParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionResetCacheParameterGroupQueryKey>
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
      ...getActionResetCacheParameterGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionResetCacheParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionResetCacheParameterGroupQueryKey>
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
      ...getActionResetCacheParameterGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionResetCacheParameterGroupMutationKey() {
  return ['#Action=ResetCacheParameterGroup', '/#Action=ResetCacheParameterGroup', 'POST'] as const
}

export function getPostActionResetCacheParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResetCacheParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ResetCacheParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionResetCacheParameterGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionResetCacheParameterGroupMutationOptions<
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

export function getActionRevokeCacheSecurityGroupIngressQueryKey(
  args: InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RevokeCacheSecurityGroupIngress',
    '/#Action=RevokeCacheSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionRevokeCacheSecurityGroupIngressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRevokeCacheSecurityGroupIngressQueryKey>
  >({
    queryKey: getActionRevokeCacheSecurityGroupIngressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RevokeCacheSecurityGroupIngress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionRevokeCacheSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRevokeCacheSecurityGroupIngressQueryKey>
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
      ...getActionRevokeCacheSecurityGroupIngressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionRevokeCacheSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRevokeCacheSecurityGroupIngressQueryKey>
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
      ...getActionRevokeCacheSecurityGroupIngressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionRevokeCacheSecurityGroupIngressMutationKey() {
  return [
    '#Action=RevokeCacheSecurityGroupIngress',
    '/#Action=RevokeCacheSecurityGroupIngress',
    'POST',
  ] as const
}

export function getPostActionRevokeCacheSecurityGroupIngressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRevokeCacheSecurityGroupIngressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$post']>,
    ) {
      return parseResponse(client['#Action=RevokeCacheSecurityGroupIngress'].$post(args, options))
    },
  })
}

export function usePostActionRevokeCacheSecurityGroupIngress<
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
                ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRevokeCacheSecurityGroupIngressMutationOptions<
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

export function getActionStartMigrationQueryKey(
  args: InferRequestType<(typeof client)['#Action=StartMigration']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartMigration', '/#Action=StartMigration', keyArgs] as const
}

export function getActionStartMigrationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartMigration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartMigrationQueryKey>
  >({
    queryKey: getActionStartMigrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartMigration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionStartMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartMigration']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionStartMigrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionStartMigrationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionStartMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartMigration']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionStartMigrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionStartMigrationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionStartMigrationMutationKey() {
  return ['#Action=StartMigration', '/#Action=StartMigration', 'POST'] as const
}

export function getPostActionStartMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StartMigration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartMigrationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=StartMigration']['$post']>) {
      return parseResponse(client['#Action=StartMigration'].$post(args, options))
    },
  })
}

export function usePostActionStartMigration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=StartMigration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionStartMigrationMutationOptions<TError, TOnMutateResult>(
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

export function getActionTestFailoverQueryKey(
  args: InferRequestType<(typeof client)['#Action=TestFailover']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TestFailover', '/#Action=TestFailover', keyArgs] as const
}

export function getActionTestFailoverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TestFailover']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTestFailoverQueryKey>
  >({
    queryKey: getActionTestFailoverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=TestFailover'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionTestFailover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TestFailover']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTestFailoverQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionTestFailoverQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionTestFailover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TestFailover']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTestFailoverQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionTestFailoverQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionTestFailoverMutationKey() {
  return ['#Action=TestFailover', '/#Action=TestFailover', 'POST'] as const
}

export function getPostActionTestFailoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TestFailover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTestFailoverMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TestFailover']['$post']>) {
      return parseResponse(client['#Action=TestFailover'].$post(args, options))
    },
  })
}

export function usePostActionTestFailover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=TestFailover']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTestFailoverMutationOptions<TError, TOnMutateResult>(
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
