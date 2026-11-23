import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AddTagsToResource', '/#Action=AddTagsToResource', keyArgs] as const
}

export function getActionAddTagsToResourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddTagsToResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddTagsToResource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAddTagsToResourceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddTagsToResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddTagsToResource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AuthorizeCacheSecurityGroupIngress',
    '/#Action=AuthorizeCacheSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionAuthorizeCacheSecurityGroupIngressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAuthorizeCacheSecurityGroupIngressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AuthorizeCacheSecurityGroupIngress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionAuthorizeCacheSecurityGroupIngressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAuthorizeCacheSecurityGroupIngressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AuthorizeCacheSecurityGroupIngress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=BatchApplyUpdateAction', '/#Action=BatchApplyUpdateAction', keyArgs] as const
}

export function getActionBatchApplyUpdateActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBatchApplyUpdateActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BatchApplyUpdateAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBatchApplyUpdateActionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBatchApplyUpdateActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BatchApplyUpdateAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=BatchStopUpdateAction', '/#Action=BatchStopUpdateAction', keyArgs] as const
}

export function getActionBatchStopUpdateActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBatchStopUpdateActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BatchStopUpdateAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBatchStopUpdateActionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBatchStopUpdateActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BatchStopUpdateAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CompleteMigration']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CompleteMigration', '/#Action=CompleteMigration', keyArgs] as const
}

export function getActionCompleteMigrationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CompleteMigration']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCompleteMigrationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CompleteMigration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CompleteMigration']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CompleteMigration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCompleteMigrationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCompleteMigrationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CompleteMigration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CopySnapshot', '/#Action=CopySnapshot', keyArgs] as const
}

export function getActionCopySnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCopySnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CopySnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCopySnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCopySnapshotQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopySnapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopySnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCopySnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CopySnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateCacheCluster', '/#Action=CreateCacheCluster', keyArgs] as const
}

export function getActionCreateCacheClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateCacheClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateCacheCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCacheCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateCacheClusterQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateCacheClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateCacheCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateCacheParameterGroup',
    '/#Action=CreateCacheParameterGroup',
    keyArgs,
  ] as const
}

export function getActionCreateCacheParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateCacheParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateCacheParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateCacheParameterGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateCacheParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateCacheParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateCacheSecurityGroup', '/#Action=CreateCacheSecurityGroup', keyArgs] as const
}

export function getActionCreateCacheSecurityGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateCacheSecurityGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateCacheSecurityGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateCacheSecurityGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateCacheSecurityGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateCacheSecurityGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateCacheSubnetGroup', '/#Action=CreateCacheSubnetGroup', keyArgs] as const
}

export function getActionCreateCacheSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateCacheSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateCacheSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateCacheSubnetGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateCacheSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateCacheSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateGlobalReplicationGroup',
    '/#Action=CreateGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionCreateGlobalReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateGlobalReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateGlobalReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateGlobalReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateGlobalReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateGlobalReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateReplicationGroup', '/#Action=CreateReplicationGroup', keyArgs] as const
}

export function getActionCreateReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateReplicationGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateSnapshot', '/#Action=CreateSnapshot', keyArgs] as const
}

export function getActionCreateSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateSnapshotQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateSnapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateUser', '/#Action=CreateUser', keyArgs] as const
}

export function getActionCreateUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUserGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateUserGroup', '/#Action=CreateUserGroup', keyArgs] as const
}

export function getActionCreateUserGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUserGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateUserGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateUserGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateUserGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateUserGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateUserGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateUserGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateUserGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DecreaseNodeGroupsInGlobalReplicationGroup',
    '/#Action=DecreaseNodeGroupsInGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DecreaseNodeGroupsInGlobalReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDecreaseNodeGroupsInGlobalReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DecreaseNodeGroupsInGlobalReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DecreaseReplicaCount', '/#Action=DecreaseReplicaCount', keyArgs] as const
}

export function getActionDecreaseReplicaCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDecreaseReplicaCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DecreaseReplicaCount'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDecreaseReplicaCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDecreaseReplicaCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DecreaseReplicaCount'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteCacheCluster', '/#Action=DeleteCacheCluster', keyArgs] as const
}

export function getActionDeleteCacheClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteCacheClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteCacheCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCacheCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteCacheClusterQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteCacheClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteCacheCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteCacheParameterGroup',
    '/#Action=DeleteCacheParameterGroup',
    keyArgs,
  ] as const
}

export function getActionDeleteCacheParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteCacheParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteCacheParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteCacheParameterGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteCacheParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteCacheParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteCacheSecurityGroup', '/#Action=DeleteCacheSecurityGroup', keyArgs] as const
}

export function getActionDeleteCacheSecurityGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteCacheSecurityGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteCacheSecurityGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteCacheSecurityGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteCacheSecurityGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteCacheSecurityGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteCacheSubnetGroup', '/#Action=DeleteCacheSubnetGroup', keyArgs] as const
}

export function getActionDeleteCacheSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteCacheSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteCacheSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteCacheSubnetGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteCacheSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteCacheSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteGlobalReplicationGroup',
    '/#Action=DeleteGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionDeleteGlobalReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteGlobalReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteGlobalReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteGlobalReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteGlobalReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteGlobalReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteReplicationGroup', '/#Action=DeleteReplicationGroup', keyArgs] as const
}

export function getActionDeleteReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteSnapshot', '/#Action=DeleteSnapshot', keyArgs] as const
}

export function getActionDeleteSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteSnapshotQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSnapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteUser', '/#Action=DeleteUser', keyArgs] as const
}

export function getActionDeleteUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteUserGroup', '/#Action=DeleteUserGroup', keyArgs] as const
}

export function getActionDeleteUserGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteUserGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteUserGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteUserGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteUserGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteUserGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteUserGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeCacheClusters', '/#Action=DescribeCacheClusters', keyArgs] as const
}

export function getActionDescribeCacheClustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeCacheClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeCacheClusters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCacheClusters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeCacheClustersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeCacheClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeCacheClusters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeCacheEngineVersions',
    '/#Action=DescribeCacheEngineVersions',
    keyArgs,
  ] as const
}

export function getActionDescribeCacheEngineVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeCacheEngineVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeCacheEngineVersions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeCacheEngineVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeCacheEngineVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeCacheEngineVersions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeCacheParameterGroups',
    '/#Action=DescribeCacheParameterGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeCacheParameterGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeCacheParameterGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeCacheParameterGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeCacheParameterGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeCacheParameterGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeCacheParameterGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeCacheParameterGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeCacheParameters', '/#Action=DescribeCacheParameters', keyArgs] as const
}

export function getActionDescribeCacheParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeCacheParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeCacheParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCacheParameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeCacheParametersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeCacheParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeCacheParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeCacheSecurityGroups',
    '/#Action=DescribeCacheSecurityGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeCacheSecurityGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeCacheSecurityGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeCacheSecurityGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeCacheSecurityGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeCacheSecurityGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeCacheSecurityGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeCacheSubnetGroups',
    '/#Action=DescribeCacheSubnetGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeCacheSubnetGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeCacheSubnetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeCacheSubnetGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeCacheSubnetGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeCacheSubnetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeCacheSubnetGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEngineDefaultParameters',
    '/#Action=DescribeEngineDefaultParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeEngineDefaultParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEngineDefaultParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEngineDefaultParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeEngineDefaultParametersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEngineDefaultParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEngineDefaultParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', keyArgs] as const
}

export function getActionDescribeEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEvents'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEvents'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeGlobalReplicationGroups',
    '/#Action=DescribeGlobalReplicationGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeGlobalReplicationGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeGlobalReplicationGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeGlobalReplicationGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeGlobalReplicationGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeGlobalReplicationGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeGlobalReplicationGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeReplicationGroups',
    '/#Action=DescribeReplicationGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeReplicationGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReplicationGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReplicationGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeReplicationGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReplicationGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReplicationGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeReservedCacheNodes',
    '/#Action=DescribeReservedCacheNodes',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedCacheNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReservedCacheNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReservedCacheNodes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeReservedCacheNodesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReservedCacheNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReservedCacheNodes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeReservedCacheNodesOfferings',
    '/#Action=DescribeReservedCacheNodesOfferings',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedCacheNodesOfferingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReservedCacheNodesOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReservedCacheNodesOfferings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeReservedCacheNodesOfferingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReservedCacheNodesOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReservedCacheNodesOfferings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeServiceUpdates', '/#Action=DescribeServiceUpdates', keyArgs] as const
}

export function getActionDescribeServiceUpdatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeServiceUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeServiceUpdates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeServiceUpdatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeServiceUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeServiceUpdates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeSnapshots', '/#Action=DescribeSnapshots', keyArgs] as const
}

export function getActionDescribeSnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeSnapshots'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSnapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeSnapshotsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeSnapshots'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeUpdateActions', '/#Action=DescribeUpdateActions', keyArgs] as const
}

export function getActionDescribeUpdateActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeUpdateActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeUpdateActions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeUpdateActions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeUpdateActionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeUpdateActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeUpdateActions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeUserGroups', '/#Action=DescribeUserGroups', keyArgs] as const
}

export function getActionDescribeUserGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeUserGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeUserGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeUserGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeUserGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeUserGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeUserGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUsers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeUsers', '/#Action=DescribeUsers', keyArgs] as const
}

export function getActionDescribeUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUsers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeUsers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeUsers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeUsers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeUsers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DisassociateGlobalReplicationGroup',
    '/#Action=DisassociateGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionDisassociateGlobalReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDisassociateGlobalReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DisassociateGlobalReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDisassociateGlobalReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDisassociateGlobalReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DisassociateGlobalReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=FailoverGlobalReplicationGroup',
    '/#Action=FailoverGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionFailoverGlobalReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionFailoverGlobalReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=FailoverGlobalReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionFailoverGlobalReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionFailoverGlobalReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=FailoverGlobalReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=IncreaseNodeGroupsInGlobalReplicationGroup',
    '/#Action=IncreaseNodeGroupsInGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=IncreaseNodeGroupsInGlobalReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionIncreaseNodeGroupsInGlobalReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=IncreaseNodeGroupsInGlobalReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=IncreaseReplicaCount', '/#Action=IncreaseReplicaCount', keyArgs] as const
}

export function getActionIncreaseReplicaCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionIncreaseReplicaCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=IncreaseReplicaCount'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionIncreaseReplicaCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionIncreaseReplicaCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=IncreaseReplicaCount'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ListAllowedNodeTypeModifications',
    '/#Action=ListAllowedNodeTypeModifications',
    keyArgs,
  ] as const
}

export function getActionListAllowedNodeTypeModificationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListAllowedNodeTypeModificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListAllowedNodeTypeModifications'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionListAllowedNodeTypeModificationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListAllowedNodeTypeModificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListAllowedNodeTypeModifications'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function getActionListTagsForResourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListTagsForResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListTagsForResource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListTagsForResourceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListTagsForResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListTagsForResource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyCacheCluster', '/#Action=ModifyCacheCluster', keyArgs] as const
}

export function getActionModifyCacheClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyCacheClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyCacheCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCacheCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyCacheClusterQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyCacheClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyCacheCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyCacheParameterGroup',
    '/#Action=ModifyCacheParameterGroup',
    keyArgs,
  ] as const
}

export function getActionModifyCacheParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyCacheParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyCacheParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyCacheParameterGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyCacheParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyCacheParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyCacheSubnetGroup', '/#Action=ModifyCacheSubnetGroup', keyArgs] as const
}

export function getActionModifyCacheSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyCacheSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyCacheSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyCacheSubnetGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyCacheSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyCacheSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyGlobalReplicationGroup',
    '/#Action=ModifyGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionModifyGlobalReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyGlobalReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyGlobalReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyGlobalReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyGlobalReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyGlobalReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyReplicationGroup', '/#Action=ModifyReplicationGroup', keyArgs] as const
}

export function getActionModifyReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyReplicationGroupShardConfiguration',
    '/#Action=ModifyReplicationGroupShardConfiguration',
    keyArgs,
  ] as const
}

export function getActionModifyReplicationGroupShardConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyReplicationGroupShardConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyReplicationGroupShardConfiguration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getActionModifyReplicationGroupShardConfigurationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyReplicationGroupShardConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyReplicationGroupShardConfiguration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUser']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyUser', '/#Action=ModifyUser', keyArgs] as const
}

export function getActionModifyUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUser']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyUser'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUser']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyUserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUser']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyUser'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyUserGroup', '/#Action=ModifyUserGroup', keyArgs] as const
}

export function getActionModifyUserGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyUserGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyUserGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyUserGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyUserGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyUserGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyUserGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyUserGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PurchaseReservedCacheNodesOffering',
    '/#Action=PurchaseReservedCacheNodesOffering',
    keyArgs,
  ] as const
}

export function getActionPurchaseReservedCacheNodesOfferingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPurchaseReservedCacheNodesOfferingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PurchaseReservedCacheNodesOffering'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionPurchaseReservedCacheNodesOfferingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPurchaseReservedCacheNodesOfferingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PurchaseReservedCacheNodesOffering'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RebalanceSlotsInGlobalReplicationGroup',
    '/#Action=RebalanceSlotsInGlobalReplicationGroup',
    keyArgs,
  ] as const
}

export function getActionRebalanceSlotsInGlobalReplicationGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRebalanceSlotsInGlobalReplicationGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RebalanceSlotsInGlobalReplicationGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getActionRebalanceSlotsInGlobalReplicationGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRebalanceSlotsInGlobalReplicationGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RebalanceSlotsInGlobalReplicationGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RebootCacheCluster', '/#Action=RebootCacheCluster', keyArgs] as const
}

export function getActionRebootCacheClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRebootCacheClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RebootCacheCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootCacheCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRebootCacheClusterQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRebootCacheClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RebootCacheCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RemoveTagsFromResource', '/#Action=RemoveTagsFromResource', keyArgs] as const
}

export function getActionRemoveTagsFromResourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveTagsFromResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveTagsFromResource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRemoveTagsFromResourceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveTagsFromResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveTagsFromResource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ResetCacheParameterGroup', '/#Action=ResetCacheParameterGroup', keyArgs] as const
}

export function getActionResetCacheParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResetCacheParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResetCacheParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionResetCacheParameterGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResetCacheParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResetCacheParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RevokeCacheSecurityGroupIngress',
    '/#Action=RevokeCacheSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionRevokeCacheSecurityGroupIngressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRevokeCacheSecurityGroupIngressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RevokeCacheSecurityGroupIngress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRevokeCacheSecurityGroupIngressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRevokeCacheSecurityGroupIngressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RevokeCacheSecurityGroupIngress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartMigration']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StartMigration', '/#Action=StartMigration', keyArgs] as const
}

export function getActionStartMigrationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartMigration']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStartMigrationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StartMigration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStartMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartMigration']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStartMigrationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartMigration']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartMigrationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStartMigrationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StartMigration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TestFailover']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=TestFailover', '/#Action=TestFailover', keyArgs] as const
}

export function getActionTestFailoverQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TestFailover']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionTestFailoverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=TestFailover'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionTestFailover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=TestFailover']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionTestFailoverQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TestFailover']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTestFailoverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionTestFailoverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=TestFailover'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
