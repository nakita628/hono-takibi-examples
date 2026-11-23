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

export function getActionAddRoleToDBClusterKey() {
  return ['#Action=AddRoleToDBCluster'] as const
}

export function getActionAddRoleToDBInstanceKey() {
  return ['#Action=AddRoleToDBInstance'] as const
}

export function getActionAddSourceIdentifierToSubscriptionKey() {
  return ['#Action=AddSourceIdentifierToSubscription'] as const
}

export function getActionAddTagsToResourceKey() {
  return ['#Action=AddTagsToResource'] as const
}

export function getActionApplyPendingMaintenanceActionKey() {
  return ['#Action=ApplyPendingMaintenanceAction'] as const
}

export function getActionAuthorizeDBSecurityGroupIngressKey() {
  return ['#Action=AuthorizeDBSecurityGroupIngress'] as const
}

export function getActionBacktrackDBClusterKey() {
  return ['#Action=BacktrackDBCluster'] as const
}

export function getActionCancelExportTaskKey() {
  return ['#Action=CancelExportTask'] as const
}

export function getActionCopyDBClusterParameterGroupKey() {
  return ['#Action=CopyDBClusterParameterGroup'] as const
}

export function getActionCopyDBClusterSnapshotKey() {
  return ['#Action=CopyDBClusterSnapshot'] as const
}

export function getActionCopyDBParameterGroupKey() {
  return ['#Action=CopyDBParameterGroup'] as const
}

export function getActionCopyDBSnapshotKey() {
  return ['#Action=CopyDBSnapshot'] as const
}

export function getActionCopyOptionGroupKey() {
  return ['#Action=CopyOptionGroup'] as const
}

export function getActionCreateBlueGreenDeploymentKey() {
  return ['#Action=CreateBlueGreenDeployment'] as const
}

export function getActionCreateCustomDBEngineVersionKey() {
  return ['#Action=CreateCustomDBEngineVersion'] as const
}

export function getActionCreateDBClusterKey() {
  return ['#Action=CreateDBCluster'] as const
}

export function getActionCreateDBClusterEndpointKey() {
  return ['#Action=CreateDBClusterEndpoint'] as const
}

export function getActionCreateDBClusterParameterGroupKey() {
  return ['#Action=CreateDBClusterParameterGroup'] as const
}

export function getActionCreateDBClusterSnapshotKey() {
  return ['#Action=CreateDBClusterSnapshot'] as const
}

export function getActionCreateDBInstanceKey() {
  return ['#Action=CreateDBInstance'] as const
}

export function getActionCreateDBInstanceReadReplicaKey() {
  return ['#Action=CreateDBInstanceReadReplica'] as const
}

export function getActionCreateDBParameterGroupKey() {
  return ['#Action=CreateDBParameterGroup'] as const
}

export function getActionCreateDBProxyKey() {
  return ['#Action=CreateDBProxy'] as const
}

export function getActionCreateDBProxyEndpointKey() {
  return ['#Action=CreateDBProxyEndpoint'] as const
}

export function getActionCreateDBSecurityGroupKey() {
  return ['#Action=CreateDBSecurityGroup'] as const
}

export function getActionCreateDBSnapshotKey() {
  return ['#Action=CreateDBSnapshot'] as const
}

export function getActionCreateDBSubnetGroupKey() {
  return ['#Action=CreateDBSubnetGroup'] as const
}

export function getActionCreateEventSubscriptionKey() {
  return ['#Action=CreateEventSubscription'] as const
}

export function getActionCreateGlobalClusterKey() {
  return ['#Action=CreateGlobalCluster'] as const
}

export function getActionCreateOptionGroupKey() {
  return ['#Action=CreateOptionGroup'] as const
}

export function getActionDeleteBlueGreenDeploymentKey() {
  return ['#Action=DeleteBlueGreenDeployment'] as const
}

export function getActionDeleteCustomDBEngineVersionKey() {
  return ['#Action=DeleteCustomDBEngineVersion'] as const
}

export function getActionDeleteDBClusterKey() {
  return ['#Action=DeleteDBCluster'] as const
}

export function getActionDeleteDBClusterAutomatedBackupKey() {
  return ['#Action=DeleteDBClusterAutomatedBackup'] as const
}

export function getActionDeleteDBClusterEndpointKey() {
  return ['#Action=DeleteDBClusterEndpoint'] as const
}

export function getActionDeleteDBClusterParameterGroupKey() {
  return ['#Action=DeleteDBClusterParameterGroup'] as const
}

export function getActionDeleteDBClusterSnapshotKey() {
  return ['#Action=DeleteDBClusterSnapshot'] as const
}

export function getActionDeleteDBInstanceKey() {
  return ['#Action=DeleteDBInstance'] as const
}

export function getActionDeleteDBInstanceAutomatedBackupKey() {
  return ['#Action=DeleteDBInstanceAutomatedBackup'] as const
}

export function getActionDeleteDBParameterGroupKey() {
  return ['#Action=DeleteDBParameterGroup'] as const
}

export function getActionDeleteDBProxyKey() {
  return ['#Action=DeleteDBProxy'] as const
}

export function getActionDeleteDBProxyEndpointKey() {
  return ['#Action=DeleteDBProxyEndpoint'] as const
}

export function getActionDeleteDBSecurityGroupKey() {
  return ['#Action=DeleteDBSecurityGroup'] as const
}

export function getActionDeleteDBSnapshotKey() {
  return ['#Action=DeleteDBSnapshot'] as const
}

export function getActionDeleteDBSubnetGroupKey() {
  return ['#Action=DeleteDBSubnetGroup'] as const
}

export function getActionDeleteEventSubscriptionKey() {
  return ['#Action=DeleteEventSubscription'] as const
}

export function getActionDeleteGlobalClusterKey() {
  return ['#Action=DeleteGlobalCluster'] as const
}

export function getActionDeleteOptionGroupKey() {
  return ['#Action=DeleteOptionGroup'] as const
}

export function getActionDeregisterDBProxyTargetsKey() {
  return ['#Action=DeregisterDBProxyTargets'] as const
}

export function getActionDescribeAccountAttributesKey() {
  return ['#Action=DescribeAccountAttributes'] as const
}

export function getActionDescribeBlueGreenDeploymentsKey() {
  return ['#Action=DescribeBlueGreenDeployments'] as const
}

export function getActionDescribeCertificatesKey() {
  return ['#Action=DescribeCertificates'] as const
}

export function getActionDescribeDBClusterAutomatedBackupsKey() {
  return ['#Action=DescribeDBClusterAutomatedBackups'] as const
}

export function getActionDescribeDBClusterBacktracksKey() {
  return ['#Action=DescribeDBClusterBacktracks'] as const
}

export function getActionDescribeDBClusterEndpointsKey() {
  return ['#Action=DescribeDBClusterEndpoints'] as const
}

export function getActionDescribeDBClusterParameterGroupsKey() {
  return ['#Action=DescribeDBClusterParameterGroups'] as const
}

export function getActionDescribeDBClusterParametersKey() {
  return ['#Action=DescribeDBClusterParameters'] as const
}

export function getActionDescribeDBClusterSnapshotAttributesKey() {
  return ['#Action=DescribeDBClusterSnapshotAttributes'] as const
}

export function getActionDescribeDBClusterSnapshotsKey() {
  return ['#Action=DescribeDBClusterSnapshots'] as const
}

export function getActionDescribeDBClustersKey() {
  return ['#Action=DescribeDBClusters'] as const
}

export function getActionDescribeDBEngineVersionsKey() {
  return ['#Action=DescribeDBEngineVersions'] as const
}

export function getActionDescribeDBInstanceAutomatedBackupsKey() {
  return ['#Action=DescribeDBInstanceAutomatedBackups'] as const
}

export function getActionDescribeDBInstancesKey() {
  return ['#Action=DescribeDBInstances'] as const
}

export function getActionDescribeDBLogFilesKey() {
  return ['#Action=DescribeDBLogFiles'] as const
}

export function getActionDescribeDBParameterGroupsKey() {
  return ['#Action=DescribeDBParameterGroups'] as const
}

export function getActionDescribeDBParametersKey() {
  return ['#Action=DescribeDBParameters'] as const
}

export function getActionDescribeDBProxiesKey() {
  return ['#Action=DescribeDBProxies'] as const
}

export function getActionDescribeDBProxyEndpointsKey() {
  return ['#Action=DescribeDBProxyEndpoints'] as const
}

export function getActionDescribeDBProxyTargetGroupsKey() {
  return ['#Action=DescribeDBProxyTargetGroups'] as const
}

export function getActionDescribeDBProxyTargetsKey() {
  return ['#Action=DescribeDBProxyTargets'] as const
}

export function getActionDescribeDBSecurityGroupsKey() {
  return ['#Action=DescribeDBSecurityGroups'] as const
}

export function getActionDescribeDBSnapshotAttributesKey() {
  return ['#Action=DescribeDBSnapshotAttributes'] as const
}

export function getActionDescribeDBSnapshotsKey() {
  return ['#Action=DescribeDBSnapshots'] as const
}

export function getActionDescribeDBSubnetGroupsKey() {
  return ['#Action=DescribeDBSubnetGroups'] as const
}

export function getActionDescribeEngineDefaultClusterParametersKey() {
  return ['#Action=DescribeEngineDefaultClusterParameters'] as const
}

export function getActionDescribeEngineDefaultParametersKey() {
  return ['#Action=DescribeEngineDefaultParameters'] as const
}

export function getActionDescribeEventCategoriesKey() {
  return ['#Action=DescribeEventCategories'] as const
}

export function getActionDescribeEventSubscriptionsKey() {
  return ['#Action=DescribeEventSubscriptions'] as const
}

export function getActionDescribeEventsKey() {
  return ['#Action=DescribeEvents'] as const
}

export function getActionDescribeExportTasksKey() {
  return ['#Action=DescribeExportTasks'] as const
}

export function getActionDescribeGlobalClustersKey() {
  return ['#Action=DescribeGlobalClusters'] as const
}

export function getActionDescribeOptionGroupOptionsKey() {
  return ['#Action=DescribeOptionGroupOptions'] as const
}

export function getActionDescribeOptionGroupsKey() {
  return ['#Action=DescribeOptionGroups'] as const
}

export function getActionDescribeOrderableDBInstanceOptionsKey() {
  return ['#Action=DescribeOrderableDBInstanceOptions'] as const
}

export function getActionDescribePendingMaintenanceActionsKey() {
  return ['#Action=DescribePendingMaintenanceActions'] as const
}

export function getActionDescribeReservedDBInstancesKey() {
  return ['#Action=DescribeReservedDBInstances'] as const
}

export function getActionDescribeReservedDBInstancesOfferingsKey() {
  return ['#Action=DescribeReservedDBInstancesOfferings'] as const
}

export function getActionDescribeSourceRegionsKey() {
  return ['#Action=DescribeSourceRegions'] as const
}

export function getActionDescribeValidDBInstanceModificationsKey() {
  return ['#Action=DescribeValidDBInstanceModifications'] as const
}

export function getActionDownloadDBLogFilePortionKey() {
  return ['#Action=DownloadDBLogFilePortion'] as const
}

export function getActionFailoverDBClusterKey() {
  return ['#Action=FailoverDBCluster'] as const
}

export function getActionFailoverGlobalClusterKey() {
  return ['#Action=FailoverGlobalCluster'] as const
}

export function getActionListTagsForResourceKey() {
  return ['#Action=ListTagsForResource'] as const
}

export function getActionModifyActivityStreamKey() {
  return ['#Action=ModifyActivityStream'] as const
}

export function getActionModifyCertificatesKey() {
  return ['#Action=ModifyCertificates'] as const
}

export function getActionModifyCurrentDBClusterCapacityKey() {
  return ['#Action=ModifyCurrentDBClusterCapacity'] as const
}

export function getActionModifyCustomDBEngineVersionKey() {
  return ['#Action=ModifyCustomDBEngineVersion'] as const
}

export function getActionModifyDBClusterKey() {
  return ['#Action=ModifyDBCluster'] as const
}

export function getActionModifyDBClusterEndpointKey() {
  return ['#Action=ModifyDBClusterEndpoint'] as const
}

export function getActionModifyDBClusterParameterGroupKey() {
  return ['#Action=ModifyDBClusterParameterGroup'] as const
}

export function getActionModifyDBClusterSnapshotAttributeKey() {
  return ['#Action=ModifyDBClusterSnapshotAttribute'] as const
}

export function getActionModifyDBInstanceKey() {
  return ['#Action=ModifyDBInstance'] as const
}

export function getActionModifyDBParameterGroupKey() {
  return ['#Action=ModifyDBParameterGroup'] as const
}

export function getActionModifyDBProxyKey() {
  return ['#Action=ModifyDBProxy'] as const
}

export function getActionModifyDBProxyEndpointKey() {
  return ['#Action=ModifyDBProxyEndpoint'] as const
}

export function getActionModifyDBProxyTargetGroupKey() {
  return ['#Action=ModifyDBProxyTargetGroup'] as const
}

export function getActionModifyDBSnapshotKey() {
  return ['#Action=ModifyDBSnapshot'] as const
}

export function getActionModifyDBSnapshotAttributeKey() {
  return ['#Action=ModifyDBSnapshotAttribute'] as const
}

export function getActionModifyDBSubnetGroupKey() {
  return ['#Action=ModifyDBSubnetGroup'] as const
}

export function getActionModifyEventSubscriptionKey() {
  return ['#Action=ModifyEventSubscription'] as const
}

export function getActionModifyGlobalClusterKey() {
  return ['#Action=ModifyGlobalCluster'] as const
}

export function getActionModifyOptionGroupKey() {
  return ['#Action=ModifyOptionGroup'] as const
}

export function getActionPromoteReadReplicaKey() {
  return ['#Action=PromoteReadReplica'] as const
}

export function getActionPromoteReadReplicaDBClusterKey() {
  return ['#Action=PromoteReadReplicaDBCluster'] as const
}

export function getActionPurchaseReservedDBInstancesOfferingKey() {
  return ['#Action=PurchaseReservedDBInstancesOffering'] as const
}

export function getActionRebootDBClusterKey() {
  return ['#Action=RebootDBCluster'] as const
}

export function getActionRebootDBInstanceKey() {
  return ['#Action=RebootDBInstance'] as const
}

export function getActionRegisterDBProxyTargetsKey() {
  return ['#Action=RegisterDBProxyTargets'] as const
}

export function getActionRemoveFromGlobalClusterKey() {
  return ['#Action=RemoveFromGlobalCluster'] as const
}

export function getActionRemoveRoleFromDBClusterKey() {
  return ['#Action=RemoveRoleFromDBCluster'] as const
}

export function getActionRemoveRoleFromDBInstanceKey() {
  return ['#Action=RemoveRoleFromDBInstance'] as const
}

export function getActionRemoveSourceIdentifierFromSubscriptionKey() {
  return ['#Action=RemoveSourceIdentifierFromSubscription'] as const
}

export function getActionRemoveTagsFromResourceKey() {
  return ['#Action=RemoveTagsFromResource'] as const
}

export function getActionResetDBClusterParameterGroupKey() {
  return ['#Action=ResetDBClusterParameterGroup'] as const
}

export function getActionResetDBParameterGroupKey() {
  return ['#Action=ResetDBParameterGroup'] as const
}

export function getActionRestoreDBClusterFromS3Key() {
  return ['#Action=RestoreDBClusterFromS3'] as const
}

export function getActionRestoreDBClusterFromSnapshotKey() {
  return ['#Action=RestoreDBClusterFromSnapshot'] as const
}

export function getActionRestoreDBClusterToPointInTimeKey() {
  return ['#Action=RestoreDBClusterToPointInTime'] as const
}

export function getActionRestoreDBInstanceFromDBSnapshotKey() {
  return ['#Action=RestoreDBInstanceFromDBSnapshot'] as const
}

export function getActionRestoreDBInstanceFromS3Key() {
  return ['#Action=RestoreDBInstanceFromS3'] as const
}

export function getActionRestoreDBInstanceToPointInTimeKey() {
  return ['#Action=RestoreDBInstanceToPointInTime'] as const
}

export function getActionRevokeDBSecurityGroupIngressKey() {
  return ['#Action=RevokeDBSecurityGroupIngress'] as const
}

export function getActionStartActivityStreamKey() {
  return ['#Action=StartActivityStream'] as const
}

export function getActionStartDBClusterKey() {
  return ['#Action=StartDBCluster'] as const
}

export function getActionStartDBInstanceKey() {
  return ['#Action=StartDBInstance'] as const
}

export function getActionStartDBInstanceAutomatedBackupsReplicationKey() {
  return ['#Action=StartDBInstanceAutomatedBackupsReplication'] as const
}

export function getActionStartExportTaskKey() {
  return ['#Action=StartExportTask'] as const
}

export function getActionStopActivityStreamKey() {
  return ['#Action=StopActivityStream'] as const
}

export function getActionStopDBClusterKey() {
  return ['#Action=StopDBCluster'] as const
}

export function getActionStopDBInstanceKey() {
  return ['#Action=StopDBInstance'] as const
}

export function getActionStopDBInstanceAutomatedBackupsReplicationKey() {
  return ['#Action=StopDBInstanceAutomatedBackupsReplication'] as const
}

export function getActionSwitchoverBlueGreenDeploymentKey() {
  return ['#Action=SwitchoverBlueGreenDeployment'] as const
}

export function getActionSwitchoverReadReplicaKey() {
  return ['#Action=SwitchoverReadReplica'] as const
}

export function getActionAddRoleToDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AddRoleToDBCluster', '/#Action=AddRoleToDBCluster', keyArgs] as const
}

export function getActionAddRoleToDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddRoleToDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddRoleToDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddRoleToDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAddRoleToDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddRoleToDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddRoleToDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddRoleToDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddRoleToDBClusterMutationKey() {
  return ['#Action=AddRoleToDBCluster', '/#Action=AddRoleToDBCluster', 'POST'] as const
}

export function getPostActionAddRoleToDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddRoleToDBClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=AddRoleToDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionAddRoleToDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionAddRoleToDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionAddRoleToDBInstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=AddRoleToDBInstance', '/#Action=AddRoleToDBInstance', keyArgs] as const
}

export function getActionAddRoleToDBInstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddRoleToDBInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddRoleToDBInstance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddRoleToDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionAddRoleToDBInstanceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddRoleToDBInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddRoleToDBInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddRoleToDBInstance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddRoleToDBInstanceMutationKey() {
  return ['#Action=AddRoleToDBInstance', '/#Action=AddRoleToDBInstance', 'POST'] as const
}

export function getPostActionAddRoleToDBInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddRoleToDBInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>,
    ) {
      return parseResponse(client['#Action=AddRoleToDBInstance'].$post(args, options))
    },
  })
}

export function usePostActionAddRoleToDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>,
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
  const mutationDefaults = getPostActionAddRoleToDBInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getActionAddSourceIdentifierToSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AddSourceIdentifierToSubscription',
    '/#Action=AddSourceIdentifierToSubscription',
    keyArgs,
  ] as const
}

export function getActionAddSourceIdentifierToSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAddSourceIdentifierToSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AddSourceIdentifierToSubscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAddSourceIdentifierToSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
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
                  ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionAddSourceIdentifierToSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddSourceIdentifierToSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAddSourceIdentifierToSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AddSourceIdentifierToSubscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAddSourceIdentifierToSubscriptionMutationKey() {
  return [
    '#Action=AddSourceIdentifierToSubscription',
    '/#Action=AddSourceIdentifierToSubscription',
    'POST',
  ] as const
}

export function getPostActionAddSourceIdentifierToSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddSourceIdentifierToSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>,
    ) {
      return parseResponse(client['#Action=AddSourceIdentifierToSubscription'].$post(args, options))
    },
  })
}

export function usePostActionAddSourceIdentifierToSubscription<
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
                  ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>,
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
  const mutationDefaults = getPostActionAddSourceIdentifierToSubscriptionMutationOptions<
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

export function getActionApplyPendingMaintenanceActionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ApplyPendingMaintenanceAction',
    '/#Action=ApplyPendingMaintenanceAction',
    keyArgs,
  ] as const
}

export function getActionApplyPendingMaintenanceActionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionApplyPendingMaintenanceActionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ApplyPendingMaintenanceAction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionApplyPendingMaintenanceAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>
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
                  ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionApplyPendingMaintenanceActionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionApplyPendingMaintenanceActionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionApplyPendingMaintenanceActionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ApplyPendingMaintenanceAction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionApplyPendingMaintenanceActionMutationKey() {
  return [
    '#Action=ApplyPendingMaintenanceAction',
    '/#Action=ApplyPendingMaintenanceAction',
    'POST',
  ] as const
}

export function getPostActionApplyPendingMaintenanceActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionApplyPendingMaintenanceActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>,
    ) {
      return parseResponse(client['#Action=ApplyPendingMaintenanceAction'].$post(args, options))
    },
  })
}

export function usePostActionApplyPendingMaintenanceAction<
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
                  ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>,
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
  const mutationDefaults = getPostActionApplyPendingMaintenanceActionMutationOptions<
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

export function getActionAuthorizeDBSecurityGroupIngressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=AuthorizeDBSecurityGroupIngress',
    '/#Action=AuthorizeDBSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionAuthorizeDBSecurityGroupIngressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionAuthorizeDBSecurityGroupIngressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=AuthorizeDBSecurityGroupIngress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionAuthorizeDBSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>
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
                  ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionAuthorizeDBSecurityGroupIngressQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAuthorizeDBSecurityGroupIngressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionAuthorizeDBSecurityGroupIngressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=AuthorizeDBSecurityGroupIngress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionAuthorizeDBSecurityGroupIngressMutationKey() {
  return [
    '#Action=AuthorizeDBSecurityGroupIngress',
    '/#Action=AuthorizeDBSecurityGroupIngress',
    'POST',
  ] as const
}

export function getPostActionAuthorizeDBSecurityGroupIngressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAuthorizeDBSecurityGroupIngressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>,
    ) {
      return parseResponse(client['#Action=AuthorizeDBSecurityGroupIngress'].$post(args, options))
    },
  })
}

export function usePostActionAuthorizeDBSecurityGroupIngress<
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
                  ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>,
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
  const mutationDefaults = getPostActionAuthorizeDBSecurityGroupIngressMutationOptions<
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

export function getActionBacktrackDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=BacktrackDBCluster', '/#Action=BacktrackDBCluster', keyArgs] as const
}

export function getActionBacktrackDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBacktrackDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BacktrackDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionBacktrackDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBacktrackDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBacktrackDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBacktrackDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BacktrackDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionBacktrackDBClusterMutationKey() {
  return ['#Action=BacktrackDBCluster', '/#Action=BacktrackDBCluster', 'POST'] as const
}

export function getPostActionBacktrackDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBacktrackDBClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=BacktrackDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionBacktrackDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionBacktrackDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionCancelExportTaskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CancelExportTask', '/#Action=CancelExportTask', keyArgs] as const
}

export function getActionCancelExportTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCancelExportTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CancelExportTask'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCancelExportTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCancelExportTaskQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCancelExportTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCancelExportTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CancelExportTask'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCancelExportTaskMutationKey() {
  return ['#Action=CancelExportTask', '/#Action=CancelExportTask', 'POST'] as const
}

export function getPostActionCancelExportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CancelExportTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCancelExportTaskMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$post']>) {
      return parseResponse(client['#Action=CancelExportTask'].$post(args, options))
    },
  })
}

export function usePostActionCancelExportTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CancelExportTask']['$post']>,
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
  const mutationDefaults = getPostActionCancelExportTaskMutationOptions<TError, TOnMutateResult>(
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

export function getActionCopyDBClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CopyDBClusterParameterGroup',
    '/#Action=CopyDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionCopyDBClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCopyDBClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CopyDBClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCopyDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCopyDBClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopyDBClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCopyDBClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CopyDBClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCopyDBClusterParameterGroupMutationKey() {
  return [
    '#Action=CopyDBClusterParameterGroup',
    '/#Action=CopyDBClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionCopyDBClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCopyDBClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CopyDBClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionCopyDBClusterParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionCopyDBClusterParameterGroupMutationOptions<
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

export function getActionCopyDBClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CopyDBClusterSnapshot', '/#Action=CopyDBClusterSnapshot', keyArgs] as const
}

export function getActionCopyDBClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCopyDBClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CopyDBClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCopyDBClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCopyDBClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopyDBClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCopyDBClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CopyDBClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCopyDBClusterSnapshotMutationKey() {
  return ['#Action=CopyDBClusterSnapshot', '/#Action=CopyDBClusterSnapshot', 'POST'] as const
}

export function getPostActionCopyDBClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCopyDBClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=CopyDBClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionCopyDBClusterSnapshot<
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
                Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionCopyDBClusterSnapshotMutationOptions<
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

export function getActionCopyDBParameterGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CopyDBParameterGroup', '/#Action=CopyDBParameterGroup', keyArgs] as const
}

export function getActionCopyDBParameterGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCopyDBParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CopyDBParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCopyDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCopyDBParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopyDBParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCopyDBParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CopyDBParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCopyDBParameterGroupMutationKey() {
  return ['#Action=CopyDBParameterGroup', '/#Action=CopyDBParameterGroup', 'POST'] as const
}

export function getPostActionCopyDBParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCopyDBParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CopyDBParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionCopyDBParameterGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionCopyDBParameterGroupMutationOptions<
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

export function getActionCopyDBSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CopyDBSnapshot', '/#Action=CopyDBSnapshot', keyArgs] as const
}

export function getActionCopyDBSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCopyDBSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CopyDBSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCopyDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCopyDBSnapshotQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopyDBSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCopyDBSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CopyDBSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCopyDBSnapshotMutationKey() {
  return ['#Action=CopyDBSnapshot', '/#Action=CopyDBSnapshot', 'POST'] as const
}

export function getPostActionCopyDBSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCopyDBSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$post']>) {
      return parseResponse(client['#Action=CopyDBSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionCopyDBSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionCopyDBSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getActionCopyOptionGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CopyOptionGroup', '/#Action=CopyOptionGroup', keyArgs] as const
}

export function getActionCopyOptionGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCopyOptionGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CopyOptionGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCopyOptionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCopyOptionGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopyOptionGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCopyOptionGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CopyOptionGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCopyOptionGroupMutationKey() {
  return ['#Action=CopyOptionGroup', '/#Action=CopyOptionGroup', 'POST'] as const
}

export function getPostActionCopyOptionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCopyOptionGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$post']>) {
      return parseResponse(client['#Action=CopyOptionGroup'].$post(args, options))
    },
  })
}

export function usePostActionCopyOptionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$post']>,
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
  const mutationDefaults = getPostActionCopyOptionGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateBlueGreenDeploymentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateBlueGreenDeployment',
    '/#Action=CreateBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function getActionCreateBlueGreenDeploymentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateBlueGreenDeploymentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateBlueGreenDeployment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateBlueGreenDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateBlueGreenDeploymentQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateBlueGreenDeploymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateBlueGreenDeploymentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateBlueGreenDeployment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateBlueGreenDeploymentMutationKey() {
  return [
    '#Action=CreateBlueGreenDeployment',
    '/#Action=CreateBlueGreenDeployment',
    'POST',
  ] as const
}

export function getPostActionCreateBlueGreenDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateBlueGreenDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateBlueGreenDeployment'].$post(args, options))
    },
  })
}

export function usePostActionCreateBlueGreenDeployment<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>,
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
  const mutationDefaults = getPostActionCreateBlueGreenDeploymentMutationOptions<
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

export function getActionCreateCustomDBEngineVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateCustomDBEngineVersion',
    '/#Action=CreateCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function getActionCreateCustomDBEngineVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateCustomDBEngineVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateCustomDBEngineVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateCustomDBEngineVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateCustomDBEngineVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateCustomDBEngineVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateCustomDBEngineVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateCustomDBEngineVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateCustomDBEngineVersionMutationKey() {
  return [
    '#Action=CreateCustomDBEngineVersion',
    '/#Action=CreateCustomDBEngineVersion',
    'POST',
  ] as const
}

export function getPostActionCreateCustomDBEngineVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateCustomDBEngineVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateCustomDBEngineVersion'].$post(args, options))
    },
  })
}

export function usePostActionCreateCustomDBEngineVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>,
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
  const mutationDefaults = getPostActionCreateCustomDBEngineVersionMutationOptions<
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

export function getActionCreateDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBCluster', '/#Action=CreateDBCluster', keyArgs] as const
}

export function getActionCreateDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBClusterMutationKey() {
  return ['#Action=CreateDBCluster', '/#Action=CreateDBCluster', 'POST'] as const
}

export function getPostActionCreateDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$post']>) {
      return parseResponse(client['#Action=CreateDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateDBClusterEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBClusterEndpoint', '/#Action=CreateDBClusterEndpoint', keyArgs] as const
}

export function getActionCreateDBClusterEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBClusterEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBClusterEndpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBClusterEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBClusterEndpointQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBClusterEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBClusterEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBClusterEndpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBClusterEndpointMutationKey() {
  return ['#Action=CreateDBClusterEndpoint', '/#Action=CreateDBClusterEndpoint', 'POST'] as const
}

export function getPostActionCreateDBClusterEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBClusterEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateDBClusterEndpoint'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBClusterEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBClusterEndpointMutationOptions<
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

export function getActionCreateDBClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateDBClusterParameterGroup',
    '/#Action=CreateDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionCreateDBClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>
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
                  ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionCreateDBClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBClusterParameterGroupMutationKey() {
  return [
    '#Action=CreateDBClusterParameterGroup',
    '/#Action=CreateDBClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionCreateDBClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateDBClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBClusterParameterGroup<
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
                  ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBClusterParameterGroupMutationOptions<
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

export function getActionCreateDBClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBClusterSnapshot', '/#Action=CreateDBClusterSnapshot', keyArgs] as const
}

export function getActionCreateDBClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBClusterSnapshotMutationKey() {
  return ['#Action=CreateDBClusterSnapshot', '/#Action=CreateDBClusterSnapshot', 'POST'] as const
}

export function getPostActionCreateDBClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateDBClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBClusterSnapshot<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBClusterSnapshotMutationOptions<
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

export function getActionCreateDBInstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBInstance', '/#Action=CreateDBInstance', keyArgs] as const
}

export function getActionCreateDBInstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBInstance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBInstanceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBInstance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBInstanceMutationKey() {
  return ['#Action=CreateDBInstance', '/#Action=CreateDBInstance', 'POST'] as const
}

export function getPostActionCreateDBInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBInstanceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$post']>) {
      return parseResponse(client['#Action=CreateDBInstance'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBInstance']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateDBInstanceReadReplicaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=CreateDBInstanceReadReplica',
    '/#Action=CreateDBInstanceReadReplica',
    keyArgs,
  ] as const
}

export function getActionCreateDBInstanceReadReplicaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBInstanceReadReplicaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBInstanceReadReplica'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBInstanceReadReplica<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBInstanceReadReplicaQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBInstanceReadReplicaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBInstanceReadReplicaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBInstanceReadReplica'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBInstanceReadReplicaMutationKey() {
  return [
    '#Action=CreateDBInstanceReadReplica',
    '/#Action=CreateDBInstanceReadReplica',
    'POST',
  ] as const
}

export function getPostActionCreateDBInstanceReadReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBInstanceReadReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateDBInstanceReadReplica'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBInstanceReadReplica<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBInstanceReadReplicaMutationOptions<
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

export function getActionCreateDBParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBParameterGroup', '/#Action=CreateDBParameterGroup', keyArgs] as const
}

export function getActionCreateDBParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBParameterGroupMutationKey() {
  return ['#Action=CreateDBParameterGroup', '/#Action=CreateDBParameterGroup', 'POST'] as const
}

export function getPostActionCreateDBParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateDBParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBParameterGroupMutationOptions<
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

export function getActionCreateDBProxyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBProxy', '/#Action=CreateDBProxy', keyArgs] as const
}

export function getActionCreateDBProxyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBProxyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBProxy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBProxyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBProxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBProxyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBProxy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBProxyMutationKey() {
  return ['#Action=CreateDBProxy', '/#Action=CreateDBProxy', 'POST'] as const
}

export function getPostActionCreateDBProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBProxy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBProxyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$post']>) {
      return parseResponse(client['#Action=CreateDBProxy'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBProxy']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBProxyMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateDBProxyEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBProxyEndpoint', '/#Action=CreateDBProxyEndpoint', keyArgs] as const
}

export function getActionCreateDBProxyEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBProxyEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBProxyEndpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBProxyEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBProxyEndpointQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBProxyEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBProxyEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBProxyEndpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBProxyEndpointMutationKey() {
  return ['#Action=CreateDBProxyEndpoint', '/#Action=CreateDBProxyEndpoint', 'POST'] as const
}

export function getPostActionCreateDBProxyEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBProxyEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateDBProxyEndpoint'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBProxyEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBProxyEndpointMutationOptions<
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

export function getActionCreateDBSecurityGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBSecurityGroup', '/#Action=CreateDBSecurityGroup', keyArgs] as const
}

export function getActionCreateDBSecurityGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBSecurityGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBSecurityGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBSecurityGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBSecurityGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBSecurityGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBSecurityGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBSecurityGroupMutationKey() {
  return ['#Action=CreateDBSecurityGroup', '/#Action=CreateDBSecurityGroup', 'POST'] as const
}

export function getPostActionCreateDBSecurityGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBSecurityGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateDBSecurityGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBSecurityGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBSecurityGroupMutationOptions<
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

export function getActionCreateDBSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBSnapshot', '/#Action=CreateDBSnapshot', keyArgs] as const
}

export function getActionCreateDBSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBSnapshotMutationKey() {
  return ['#Action=CreateDBSnapshot', '/#Action=CreateDBSnapshot', 'POST'] as const
}

export function getPostActionCreateDBSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$post']>) {
      return parseResponse(client['#Action=CreateDBSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateDBSubnetGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDBSubnetGroup', '/#Action=CreateDBSubnetGroup', keyArgs] as const
}

export function getActionCreateDBSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDBSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDBSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDBSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDBSubnetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBSubnetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDBSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDBSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDBSubnetGroupMutationKey() {
  return ['#Action=CreateDBSubnetGroup', '/#Action=CreateDBSubnetGroup', 'POST'] as const
}

export function getPostActionCreateDBSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDBSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateDBSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateDBSubnetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateDBSubnetGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateEventSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', keyArgs] as const
}

export function getActionCreateEventSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateEventSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateEventSubscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateEventSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateEventSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateEventSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateEventSubscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateEventSubscriptionMutationKey() {
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', 'POST'] as const
}

export function getPostActionCreateEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateEventSubscription'].$post(args, options))
    },
  })
}

export function usePostActionCreateEventSubscription<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
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
  const mutationDefaults = getPostActionCreateEventSubscriptionMutationOptions<
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

export function getActionCreateGlobalClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateGlobalCluster', '/#Action=CreateGlobalCluster', keyArgs] as const
}

export function getActionCreateGlobalClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateGlobalClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateGlobalCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateGlobalClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateGlobalClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateGlobalClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateGlobalCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateGlobalClusterMutationKey() {
  return ['#Action=CreateGlobalCluster', '/#Action=CreateGlobalCluster', 'POST'] as const
}

export function getPostActionCreateGlobalClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateGlobalClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateGlobalCluster'].$post(args, options))
    },
  })
}

export function usePostActionCreateGlobalCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$post']>,
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
  const mutationDefaults = getPostActionCreateGlobalClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateOptionGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateOptionGroup', '/#Action=CreateOptionGroup', keyArgs] as const
}

export function getActionCreateOptionGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateOptionGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateOptionGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateOptionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateOptionGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateOptionGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateOptionGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateOptionGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateOptionGroupMutationKey() {
  return ['#Action=CreateOptionGroup', '/#Action=CreateOptionGroup', 'POST'] as const
}

export function getPostActionCreateOptionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateOptionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateOptionGroup'].$post(args, options))
    },
  })
}

export function usePostActionCreateOptionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$post']>,
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
  const mutationDefaults = getPostActionCreateOptionGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteBlueGreenDeploymentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteBlueGreenDeployment',
    '/#Action=DeleteBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function getActionDeleteBlueGreenDeploymentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteBlueGreenDeploymentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteBlueGreenDeployment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteBlueGreenDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteBlueGreenDeploymentQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteBlueGreenDeploymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteBlueGreenDeploymentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteBlueGreenDeployment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteBlueGreenDeploymentMutationKey() {
  return [
    '#Action=DeleteBlueGreenDeployment',
    '/#Action=DeleteBlueGreenDeployment',
    'POST',
  ] as const
}

export function getPostActionDeleteBlueGreenDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteBlueGreenDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteBlueGreenDeployment'].$post(args, options))
    },
  })
}

export function usePostActionDeleteBlueGreenDeployment<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>,
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
  const mutationDefaults = getPostActionDeleteBlueGreenDeploymentMutationOptions<
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

export function getActionDeleteCustomDBEngineVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteCustomDBEngineVersion',
    '/#Action=DeleteCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function getActionDeleteCustomDBEngineVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteCustomDBEngineVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteCustomDBEngineVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteCustomDBEngineVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteCustomDBEngineVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteCustomDBEngineVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteCustomDBEngineVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteCustomDBEngineVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteCustomDBEngineVersionMutationKey() {
  return [
    '#Action=DeleteCustomDBEngineVersion',
    '/#Action=DeleteCustomDBEngineVersion',
    'POST',
  ] as const
}

export function getPostActionDeleteCustomDBEngineVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteCustomDBEngineVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteCustomDBEngineVersion'].$post(args, options))
    },
  })
}

export function usePostActionDeleteCustomDBEngineVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>,
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
  const mutationDefaults = getPostActionDeleteCustomDBEngineVersionMutationOptions<
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

export function getActionDeleteDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBCluster', '/#Action=DeleteDBCluster', keyArgs] as const
}

export function getActionDeleteDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBClusterMutationKey() {
  return ['#Action=DeleteDBCluster', '/#Action=DeleteDBCluster', 'POST'] as const
}

export function getPostActionDeleteDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$post']>) {
      return parseResponse(client['#Action=DeleteDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteDBClusterAutomatedBackupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteDBClusterAutomatedBackup',
    '/#Action=DeleteDBClusterAutomatedBackup',
    keyArgs,
  ] as const
}

export function getActionDeleteDBClusterAutomatedBackupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBClusterAutomatedBackupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBClusterAutomatedBackup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBClusterAutomatedBackup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>
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
                  ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBClusterAutomatedBackupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBClusterAutomatedBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBClusterAutomatedBackupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBClusterAutomatedBackup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBClusterAutomatedBackupMutationKey() {
  return [
    '#Action=DeleteDBClusterAutomatedBackup',
    '/#Action=DeleteDBClusterAutomatedBackup',
    'POST',
  ] as const
}

export function getPostActionDeleteDBClusterAutomatedBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBClusterAutomatedBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBClusterAutomatedBackup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBClusterAutomatedBackup<
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
                  ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBClusterAutomatedBackupMutationOptions<
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

export function getActionDeleteDBClusterEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBClusterEndpoint', '/#Action=DeleteDBClusterEndpoint', keyArgs] as const
}

export function getActionDeleteDBClusterEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBClusterEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBClusterEndpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBClusterEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBClusterEndpointQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBClusterEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBClusterEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBClusterEndpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBClusterEndpointMutationKey() {
  return ['#Action=DeleteDBClusterEndpoint', '/#Action=DeleteDBClusterEndpoint', 'POST'] as const
}

export function getPostActionDeleteDBClusterEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBClusterEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBClusterEndpoint'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBClusterEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBClusterEndpointMutationOptions<
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

export function getActionDeleteDBClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteDBClusterParameterGroup',
    '/#Action=DeleteDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionDeleteDBClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>
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
                  ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBClusterParameterGroupMutationKey() {
  return [
    '#Action=DeleteDBClusterParameterGroup',
    '/#Action=DeleteDBClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionDeleteDBClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBClusterParameterGroup<
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
                  ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBClusterParameterGroupMutationOptions<
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

export function getActionDeleteDBClusterSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBClusterSnapshot', '/#Action=DeleteDBClusterSnapshot', keyArgs] as const
}

export function getActionDeleteDBClusterSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBClusterSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBClusterSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBClusterSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBClusterSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBClusterSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBClusterSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBClusterSnapshotMutationKey() {
  return ['#Action=DeleteDBClusterSnapshot', '/#Action=DeleteDBClusterSnapshot', 'POST'] as const
}

export function getPostActionDeleteDBClusterSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBClusterSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBClusterSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBClusterSnapshot<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBClusterSnapshotMutationOptions<
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

export function getActionDeleteDBInstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBInstance', '/#Action=DeleteDBInstance', keyArgs] as const
}

export function getActionDeleteDBInstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBInstance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBInstanceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBInstance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBInstanceMutationKey() {
  return ['#Action=DeleteDBInstance', '/#Action=DeleteDBInstance', 'POST'] as const
}

export function getPostActionDeleteDBInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBInstanceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$post']>) {
      return parseResponse(client['#Action=DeleteDBInstance'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteDBInstanceAutomatedBackupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DeleteDBInstanceAutomatedBackup',
    '/#Action=DeleteDBInstanceAutomatedBackup',
    keyArgs,
  ] as const
}

export function getActionDeleteDBInstanceAutomatedBackupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBInstanceAutomatedBackupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBInstanceAutomatedBackup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBInstanceAutomatedBackup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>
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
                  ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBInstanceAutomatedBackupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBInstanceAutomatedBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBInstanceAutomatedBackupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBInstanceAutomatedBackup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBInstanceAutomatedBackupMutationKey() {
  return [
    '#Action=DeleteDBInstanceAutomatedBackup',
    '/#Action=DeleteDBInstanceAutomatedBackup',
    'POST',
  ] as const
}

export function getPostActionDeleteDBInstanceAutomatedBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBInstanceAutomatedBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBInstanceAutomatedBackup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBInstanceAutomatedBackup<
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
                  ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBInstanceAutomatedBackupMutationOptions<
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

export function getActionDeleteDBParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBParameterGroup', '/#Action=DeleteDBParameterGroup', keyArgs] as const
}

export function getActionDeleteDBParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBParameterGroupMutationKey() {
  return ['#Action=DeleteDBParameterGroup', '/#Action=DeleteDBParameterGroup', 'POST'] as const
}

export function getPostActionDeleteDBParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBParameterGroupMutationOptions<
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

export function getActionDeleteDBProxyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBProxy', '/#Action=DeleteDBProxy', keyArgs] as const
}

export function getActionDeleteDBProxyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBProxyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBProxy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBProxyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBProxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBProxyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBProxy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBProxyMutationKey() {
  return ['#Action=DeleteDBProxy', '/#Action=DeleteDBProxy', 'POST'] as const
}

export function getPostActionDeleteDBProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBProxyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$post']>) {
      return parseResponse(client['#Action=DeleteDBProxy'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBProxyMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteDBProxyEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBProxyEndpoint', '/#Action=DeleteDBProxyEndpoint', keyArgs] as const
}

export function getActionDeleteDBProxyEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBProxyEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBProxyEndpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBProxyEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBProxyEndpointQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBProxyEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBProxyEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBProxyEndpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBProxyEndpointMutationKey() {
  return ['#Action=DeleteDBProxyEndpoint', '/#Action=DeleteDBProxyEndpoint', 'POST'] as const
}

export function getPostActionDeleteDBProxyEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBProxyEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBProxyEndpoint'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBProxyEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBProxyEndpointMutationOptions<
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

export function getActionDeleteDBSecurityGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBSecurityGroup', '/#Action=DeleteDBSecurityGroup', keyArgs] as const
}

export function getActionDeleteDBSecurityGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBSecurityGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBSecurityGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBSecurityGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBSecurityGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBSecurityGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBSecurityGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBSecurityGroupMutationKey() {
  return ['#Action=DeleteDBSecurityGroup', '/#Action=DeleteDBSecurityGroup', 'POST'] as const
}

export function getPostActionDeleteDBSecurityGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBSecurityGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBSecurityGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBSecurityGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBSecurityGroupMutationOptions<
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

export function getActionDeleteDBSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBSnapshot', '/#Action=DeleteDBSnapshot', keyArgs] as const
}

export function getActionDeleteDBSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBSnapshotMutationKey() {
  return ['#Action=DeleteDBSnapshot', '/#Action=DeleteDBSnapshot', 'POST'] as const
}

export function getPostActionDeleteDBSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$post']>) {
      return parseResponse(client['#Action=DeleteDBSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteDBSubnetGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDBSubnetGroup', '/#Action=DeleteDBSubnetGroup', keyArgs] as const
}

export function getActionDeleteDBSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDBSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDBSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDBSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDBSubnetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBSubnetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDBSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDBSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDBSubnetGroupMutationKey() {
  return ['#Action=DeleteDBSubnetGroup', '/#Action=DeleteDBSubnetGroup', 'POST'] as const
}

export function getPostActionDeleteDBSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDBSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteDBSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDBSubnetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDBSubnetGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteEventSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', keyArgs] as const
}

export function getActionDeleteEventSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteEventSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteEventSubscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteEventSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteEventSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteEventSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteEventSubscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteEventSubscriptionMutationKey() {
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', 'POST'] as const
}

export function getPostActionDeleteEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteEventSubscription'].$post(args, options))
    },
  })
}

export function usePostActionDeleteEventSubscription<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
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
  const mutationDefaults = getPostActionDeleteEventSubscriptionMutationOptions<
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

export function getActionDeleteGlobalClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteGlobalCluster', '/#Action=DeleteGlobalCluster', keyArgs] as const
}

export function getActionDeleteGlobalClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteGlobalClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteGlobalCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteGlobalClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteGlobalClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteGlobalClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteGlobalCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteGlobalClusterMutationKey() {
  return ['#Action=DeleteGlobalCluster', '/#Action=DeleteGlobalCluster', 'POST'] as const
}

export function getPostActionDeleteGlobalClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteGlobalClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteGlobalCluster'].$post(args, options))
    },
  })
}

export function usePostActionDeleteGlobalCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>,
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
  const mutationDefaults = getPostActionDeleteGlobalClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteOptionGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteOptionGroup', '/#Action=DeleteOptionGroup', keyArgs] as const
}

export function getActionDeleteOptionGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteOptionGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteOptionGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteOptionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteOptionGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteOptionGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteOptionGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteOptionGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteOptionGroupMutationKey() {
  return ['#Action=DeleteOptionGroup', '/#Action=DeleteOptionGroup', 'POST'] as const
}

export function getPostActionDeleteOptionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteOptionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteOptionGroup'].$post(args, options))
    },
  })
}

export function usePostActionDeleteOptionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$post']>,
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
  const mutationDefaults = getPostActionDeleteOptionGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeregisterDBProxyTargetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeregisterDBProxyTargets', '/#Action=DeregisterDBProxyTargets', keyArgs] as const
}

export function getActionDeregisterDBProxyTargetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeregisterDBProxyTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeregisterDBProxyTargets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeregisterDBProxyTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeregisterDBProxyTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeregisterDBProxyTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeregisterDBProxyTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeregisterDBProxyTargets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeregisterDBProxyTargetsMutationKey() {
  return ['#Action=DeregisterDBProxyTargets', '/#Action=DeregisterDBProxyTargets', 'POST'] as const
}

export function getPostActionDeregisterDBProxyTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeregisterDBProxyTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>,
    ) {
      return parseResponse(client['#Action=DeregisterDBProxyTargets'].$post(args, options))
    },
  })
}

export function usePostActionDeregisterDBProxyTargets<
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
                Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>,
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
  const mutationDefaults = getPostActionDeregisterDBProxyTargetsMutationOptions<
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

export function getActionDescribeAccountAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeAccountAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAccountAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAccountAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAccountAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAccountAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAccountAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAccountAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAccountAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeAccountAttributesMutationKey() {
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    'POST',
  ] as const
}

export function getPostActionDescribeAccountAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAccountAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAccountAttributes'].$post(args, options))
    },
  })
}

export function usePostActionDescribeAccountAttributes<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeAccountAttributesMutationOptions<
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

export function getActionDescribeBlueGreenDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeBlueGreenDeployments',
    '/#Action=DescribeBlueGreenDeployments',
    keyArgs,
  ] as const
}

export function getActionDescribeBlueGreenDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeBlueGreenDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeBlueGreenDeployments'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeBlueGreenDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeBlueGreenDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeBlueGreenDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeBlueGreenDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeBlueGreenDeployments'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeBlueGreenDeploymentsMutationKey() {
  return [
    '#Action=DescribeBlueGreenDeployments',
    '/#Action=DescribeBlueGreenDeployments',
    'POST',
  ] as const
}

export function getPostActionDescribeBlueGreenDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeBlueGreenDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeBlueGreenDeployments'].$post(args, options))
    },
  })
}

export function usePostActionDescribeBlueGreenDeployments<
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
                  ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>,
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
  const mutationDefaults = getPostActionDescribeBlueGreenDeploymentsMutationOptions<
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

export function getActionDescribeCertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeCertificates', '/#Action=DescribeCertificates', keyArgs] as const
}

export function getActionDescribeCertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeCertificates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeCertificatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeCertificates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeCertificatesMutationKey() {
  return ['#Action=DescribeCertificates', '/#Action=DescribeCertificates', 'POST'] as const
}

export function getPostActionDescribeCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeCertificates'].$post(args, options))
    },
  })
}

export function usePostActionDescribeCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeCertificates']['$post']>,
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
  const mutationDefaults = getPostActionDescribeCertificatesMutationOptions<
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

export function getActionDescribeDBClusterAutomatedBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBClusterAutomatedBackups',
    '/#Action=DescribeDBClusterAutomatedBackups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterAutomatedBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBClusterAutomatedBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBClusterAutomatedBackups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBClusterAutomatedBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBClusterAutomatedBackupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBClusterAutomatedBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBClusterAutomatedBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBClusterAutomatedBackups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBClusterAutomatedBackupsMutationKey() {
  return [
    '#Action=DescribeDBClusterAutomatedBackups',
    '/#Action=DescribeDBClusterAutomatedBackups',
    'POST',
  ] as const
}

export function getPostActionDescribeDBClusterAutomatedBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBClusterAutomatedBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBClusterAutomatedBackups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBClusterAutomatedBackups<
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
                  ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBClusterAutomatedBackupsMutationOptions<
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

export function getActionDescribeDBClusterBacktracksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBClusterBacktracks',
    '/#Action=DescribeDBClusterBacktracks',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterBacktracksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBClusterBacktracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBClusterBacktracks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBClusterBacktracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBClusterBacktracksQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBClusterBacktracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBClusterBacktracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBClusterBacktracks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBClusterBacktracksMutationKey() {
  return [
    '#Action=DescribeDBClusterBacktracks',
    '/#Action=DescribeDBClusterBacktracks',
    'POST',
  ] as const
}

export function getPostActionDescribeDBClusterBacktracksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBClusterBacktracksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBClusterBacktracks'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBClusterBacktracks<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBClusterBacktracksMutationOptions<
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

export function getActionDescribeDBClusterEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBClusterEndpoints',
    '/#Action=DescribeDBClusterEndpoints',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBClusterEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBClusterEndpoints'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBClusterEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBClusterEndpointsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBClusterEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBClusterEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBClusterEndpoints'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBClusterEndpointsMutationKey() {
  return [
    '#Action=DescribeDBClusterEndpoints',
    '/#Action=DescribeDBClusterEndpoints',
    'POST',
  ] as const
}

export function getPostActionDescribeDBClusterEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBClusterEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBClusterEndpoints'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBClusterEndpoints<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBClusterEndpointsMutationOptions<
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

export function getActionDescribeDBClusterParameterGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBClusterParameterGroups',
    '/#Action=DescribeDBClusterParameterGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterParameterGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBClusterParameterGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBClusterParameterGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBClusterParameterGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBClusterParameterGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBClusterParameterGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBClusterParameterGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBClusterParameterGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBClusterParameterGroupsMutationKey() {
  return [
    '#Action=DescribeDBClusterParameterGroups',
    '/#Action=DescribeDBClusterParameterGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeDBClusterParameterGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBClusterParameterGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBClusterParameterGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBClusterParameterGroups<
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
                  ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBClusterParameterGroupsMutationOptions<
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

export function getActionDescribeDBClusterParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBClusterParameters',
    '/#Action=DescribeDBClusterParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBClusterParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBClusterParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBClusterParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBClusterParametersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBClusterParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBClusterParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBClusterParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBClusterParametersMutationKey() {
  return [
    '#Action=DescribeDBClusterParameters',
    '/#Action=DescribeDBClusterParameters',
    'POST',
  ] as const
}

export function getPostActionDescribeDBClusterParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBClusterParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBClusterParameters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBClusterParameters<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBClusterParametersMutationOptions<
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

export function getActionDescribeDBClusterSnapshotAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBClusterSnapshotAttributes',
    '/#Action=DescribeDBClusterSnapshotAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterSnapshotAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBClusterSnapshotAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBClusterSnapshotAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBClusterSnapshotAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBClusterSnapshotAttributesQueryKey>
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
            ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBClusterSnapshotAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBClusterSnapshotAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBClusterSnapshotAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBClusterSnapshotAttributesMutationKey() {
  return [
    '#Action=DescribeDBClusterSnapshotAttributes',
    '/#Action=DescribeDBClusterSnapshotAttributes',
    'POST',
  ] as const
}

export function getPostActionDescribeDBClusterSnapshotAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBClusterSnapshotAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeDBClusterSnapshotAttributes'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeDBClusterSnapshotAttributes<
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
                    (typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBClusterSnapshotAttributesMutationOptions<
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

export function getActionDescribeDBClusterSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBClusterSnapshots',
    '/#Action=DescribeDBClusterSnapshots',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBClusterSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBClusterSnapshots'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBClusterSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBClusterSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBClusterSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBClusterSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBClusterSnapshots'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBClusterSnapshotsMutationKey() {
  return [
    '#Action=DescribeDBClusterSnapshots',
    '/#Action=DescribeDBClusterSnapshots',
    'POST',
  ] as const
}

export function getPostActionDescribeDBClusterSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBClusterSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBClusterSnapshots'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBClusterSnapshots<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBClusterSnapshotsMutationOptions<
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

export function getActionDescribeDBClustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBClusters', '/#Action=DescribeDBClusters', keyArgs] as const
}

export function getActionDescribeDBClustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBClusters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBClustersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBClusters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBClustersMutationKey() {
  return ['#Action=DescribeDBClusters', '/#Action=DescribeDBClusters', 'POST'] as const
}

export function getPostActionDescribeDBClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBClusters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBClustersMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeDBEngineVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBEngineVersions', '/#Action=DescribeDBEngineVersions', keyArgs] as const
}

export function getActionDescribeDBEngineVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBEngineVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBEngineVersions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBEngineVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBEngineVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBEngineVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBEngineVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBEngineVersions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBEngineVersionsMutationKey() {
  return ['#Action=DescribeDBEngineVersions', '/#Action=DescribeDBEngineVersions', 'POST'] as const
}

export function getPostActionDescribeDBEngineVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBEngineVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBEngineVersions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBEngineVersions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBEngineVersionsMutationOptions<
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

export function getActionDescribeDBInstanceAutomatedBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBInstanceAutomatedBackups',
    '/#Action=DescribeDBInstanceAutomatedBackups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBInstanceAutomatedBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBInstanceAutomatedBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBInstanceAutomatedBackups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBInstanceAutomatedBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBInstanceAutomatedBackupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBInstanceAutomatedBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBInstanceAutomatedBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBInstanceAutomatedBackups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBInstanceAutomatedBackupsMutationKey() {
  return [
    '#Action=DescribeDBInstanceAutomatedBackups',
    '/#Action=DescribeDBInstanceAutomatedBackups',
    'POST',
  ] as const
}

export function getPostActionDescribeDBInstanceAutomatedBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBInstanceAutomatedBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeDBInstanceAutomatedBackups'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeDBInstanceAutomatedBackups<
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
                  ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBInstanceAutomatedBackupsMutationOptions<
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

export function getActionDescribeDBInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBInstances', '/#Action=DescribeDBInstances', keyArgs] as const
}

export function getActionDescribeDBInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBInstances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBInstances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBInstancesMutationKey() {
  return ['#Action=DescribeDBInstances', '/#Action=DescribeDBInstances', 'POST'] as const
}

export function getPostActionDescribeDBInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBInstances'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeDBLogFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBLogFiles', '/#Action=DescribeDBLogFiles', keyArgs] as const
}

export function getActionDescribeDBLogFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBLogFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBLogFiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBLogFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBLogFilesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBLogFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBLogFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBLogFiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBLogFilesMutationKey() {
  return ['#Action=DescribeDBLogFiles', '/#Action=DescribeDBLogFiles', 'POST'] as const
}

export function getPostActionDescribeDBLogFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBLogFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBLogFiles'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBLogFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBLogFilesMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeDBParameterGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBParameterGroups',
    '/#Action=DescribeDBParameterGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBParameterGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBParameterGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBParameterGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBParameterGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBParameterGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBParameterGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBParameterGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBParameterGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBParameterGroupsMutationKey() {
  return [
    '#Action=DescribeDBParameterGroups',
    '/#Action=DescribeDBParameterGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeDBParameterGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBParameterGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBParameterGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBParameterGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBParameterGroupsMutationOptions<
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

export function getActionDescribeDBParametersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBParameters', '/#Action=DescribeDBParameters', keyArgs] as const
}

export function getActionDescribeDBParametersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBParametersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBParametersMutationKey() {
  return ['#Action=DescribeDBParameters', '/#Action=DescribeDBParameters', 'POST'] as const
}

export function getPostActionDescribeDBParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBParameters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBParameters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBParametersMutationOptions<
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

export function getActionDescribeDBProxiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBProxies', '/#Action=DescribeDBProxies', keyArgs] as const
}

export function getActionDescribeDBProxiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBProxiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBProxies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBProxies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBProxiesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBProxiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBProxiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBProxies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBProxiesMutationKey() {
  return ['#Action=DescribeDBProxies', '/#Action=DescribeDBProxies', 'POST'] as const
}

export function getPostActionDescribeDBProxiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBProxiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBProxies'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBProxies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBProxiesMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeDBProxyEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBProxyEndpoints', '/#Action=DescribeDBProxyEndpoints', keyArgs] as const
}

export function getActionDescribeDBProxyEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBProxyEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBProxyEndpoints'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBProxyEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBProxyEndpointsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBProxyEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBProxyEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBProxyEndpoints'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBProxyEndpointsMutationKey() {
  return ['#Action=DescribeDBProxyEndpoints', '/#Action=DescribeDBProxyEndpoints', 'POST'] as const
}

export function getPostActionDescribeDBProxyEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBProxyEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBProxyEndpoints'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBProxyEndpoints<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBProxyEndpointsMutationOptions<
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

export function getActionDescribeDBProxyTargetGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBProxyTargetGroups',
    '/#Action=DescribeDBProxyTargetGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBProxyTargetGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBProxyTargetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBProxyTargetGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBProxyTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBProxyTargetGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBProxyTargetGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBProxyTargetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBProxyTargetGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBProxyTargetGroupsMutationKey() {
  return [
    '#Action=DescribeDBProxyTargetGroups',
    '/#Action=DescribeDBProxyTargetGroups',
    'POST',
  ] as const
}

export function getPostActionDescribeDBProxyTargetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBProxyTargetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBProxyTargetGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBProxyTargetGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBProxyTargetGroupsMutationOptions<
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

export function getActionDescribeDBProxyTargetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBProxyTargets', '/#Action=DescribeDBProxyTargets', keyArgs] as const
}

export function getActionDescribeDBProxyTargetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBProxyTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBProxyTargets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBProxyTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBProxyTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBProxyTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBProxyTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBProxyTargets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBProxyTargetsMutationKey() {
  return ['#Action=DescribeDBProxyTargets', '/#Action=DescribeDBProxyTargets', 'POST'] as const
}

export function getPostActionDescribeDBProxyTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBProxyTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBProxyTargets'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBProxyTargets<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBProxyTargetsMutationOptions<
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

export function getActionDescribeDBSecurityGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBSecurityGroups', '/#Action=DescribeDBSecurityGroups', keyArgs] as const
}

export function getActionDescribeDBSecurityGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBSecurityGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBSecurityGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBSecurityGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBSecurityGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBSecurityGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBSecurityGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBSecurityGroupsMutationKey() {
  return ['#Action=DescribeDBSecurityGroups', '/#Action=DescribeDBSecurityGroups', 'POST'] as const
}

export function getPostActionDescribeDBSecurityGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBSecurityGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBSecurityGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBSecurityGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBSecurityGroupsMutationOptions<
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

export function getActionDescribeDBSnapshotAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDBSnapshotAttributes',
    '/#Action=DescribeDBSnapshotAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeDBSnapshotAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBSnapshotAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBSnapshotAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBSnapshotAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBSnapshotAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBSnapshotAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBSnapshotAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBSnapshotAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBSnapshotAttributesMutationKey() {
  return [
    '#Action=DescribeDBSnapshotAttributes',
    '/#Action=DescribeDBSnapshotAttributes',
    'POST',
  ] as const
}

export function getPostActionDescribeDBSnapshotAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBSnapshotAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBSnapshotAttributes'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBSnapshotAttributes<
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
                  ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBSnapshotAttributesMutationOptions<
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

export function getActionDescribeDBSnapshotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBSnapshots', '/#Action=DescribeDBSnapshots', keyArgs] as const
}

export function getActionDescribeDBSnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBSnapshots'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBSnapshots'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBSnapshotsMutationKey() {
  return ['#Action=DescribeDBSnapshots', '/#Action=DescribeDBSnapshots', 'POST'] as const
}

export function getPostActionDescribeDBSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBSnapshots'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBSnapshotsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeDBSubnetGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDBSubnetGroups', '/#Action=DescribeDBSubnetGroups', keyArgs] as const
}

export function getActionDescribeDBSubnetGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDBSubnetGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDBSubnetGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDBSubnetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDBSubnetGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDBSubnetGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDBSubnetGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDBSubnetGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeDBSubnetGroupsMutationKey() {
  return ['#Action=DescribeDBSubnetGroups', '/#Action=DescribeDBSubnetGroups', 'POST'] as const
}

export function getPostActionDescribeDBSubnetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDBSubnetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDBSubnetGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeDBSubnetGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDBSubnetGroupsMutationOptions<
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

export function getActionDescribeEngineDefaultClusterParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEngineDefaultClusterParameters',
    '/#Action=DescribeEngineDefaultClusterParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeEngineDefaultClusterParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEngineDefaultClusterParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEngineDefaultClusterParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEngineDefaultClusterParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
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
                    (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']
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
                    (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeEngineDefaultClusterParametersQueryKey>
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
            ReturnType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEngineDefaultClusterParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEngineDefaultClusterParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEngineDefaultClusterParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEngineDefaultClusterParametersMutationKey() {
  return [
    '#Action=DescribeEngineDefaultClusterParameters',
    '/#Action=DescribeEngineDefaultClusterParameters',
    'POST',
  ] as const
}

export function getPostActionDescribeEngineDefaultClusterParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEngineDefaultClusterParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeEngineDefaultClusterParameters'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeEngineDefaultClusterParameters<
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
                    (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$post']
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
  const mutationDefaults = getPostActionDescribeEngineDefaultClusterParametersMutationOptions<
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

export function getActionDescribeEventCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', keyArgs] as const
}

export function getActionDescribeEventCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEventCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEventCategories'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEventCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEventCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEventCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEventCategories'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEventCategoriesMutationKey() {
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', 'POST'] as const
}

export function getPostActionDescribeEventCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEventCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEventCategories'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEventCategories<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEventCategoriesMutationOptions<
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

export function getActionDescribeEventSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    keyArgs,
  ] as const
}

export function getActionDescribeEventSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeEventSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeEventSubscriptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeEventSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeEventSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeEventSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeEventSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeEventSubscriptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeEventSubscriptionsMutationKey() {
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    'POST',
  ] as const
}

export function getPostActionDescribeEventSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeEventSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeEventSubscriptions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeEventSubscriptions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeEventSubscriptionsMutationOptions<
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

export function getActionDescribeExportTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeExportTasks', '/#Action=DescribeExportTasks', keyArgs] as const
}

export function getActionDescribeExportTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeExportTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeExportTasks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeExportTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeExportTasksQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeExportTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeExportTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeExportTasks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeExportTasksMutationKey() {
  return ['#Action=DescribeExportTasks', '/#Action=DescribeExportTasks', 'POST'] as const
}

export function getPostActionDescribeExportTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeExportTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeExportTasks'].$post(args, options))
    },
  })
}

export function usePostActionDescribeExportTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$post']>,
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
  const mutationDefaults = getPostActionDescribeExportTasksMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeGlobalClustersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeGlobalClusters', '/#Action=DescribeGlobalClusters', keyArgs] as const
}

export function getActionDescribeGlobalClustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeGlobalClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeGlobalClusters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeGlobalClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeGlobalClustersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeGlobalClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeGlobalClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeGlobalClusters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeGlobalClustersMutationKey() {
  return ['#Action=DescribeGlobalClusters', '/#Action=DescribeGlobalClusters', 'POST'] as const
}

export function getPostActionDescribeGlobalClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeGlobalClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeGlobalClusters'].$post(args, options))
    },
  })
}

export function usePostActionDescribeGlobalClusters<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>,
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
  const mutationDefaults = getPostActionDescribeGlobalClustersMutationOptions<
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

export function getActionDescribeOptionGroupOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeOptionGroupOptions',
    '/#Action=DescribeOptionGroupOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeOptionGroupOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeOptionGroupOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeOptionGroupOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeOptionGroupOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeOptionGroupOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeOptionGroupOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeOptionGroupOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeOptionGroupOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeOptionGroupOptionsMutationKey() {
  return [
    '#Action=DescribeOptionGroupOptions',
    '/#Action=DescribeOptionGroupOptions',
    'POST',
  ] as const
}

export function getPostActionDescribeOptionGroupOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeOptionGroupOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeOptionGroupOptions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeOptionGroupOptions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeOptionGroupOptionsMutationOptions<
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

export function getActionDescribeOptionGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeOptionGroups', '/#Action=DescribeOptionGroups', keyArgs] as const
}

export function getActionDescribeOptionGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeOptionGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeOptionGroups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeOptionGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeOptionGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeOptionGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeOptionGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeOptionGroups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeOptionGroupsMutationKey() {
  return ['#Action=DescribeOptionGroups', '/#Action=DescribeOptionGroups', 'POST'] as const
}

export function getPostActionDescribeOptionGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeOptionGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeOptionGroups'].$post(args, options))
    },
  })
}

export function usePostActionDescribeOptionGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$post']>,
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
  const mutationDefaults = getPostActionDescribeOptionGroupsMutationOptions<
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

export function getActionDescribeOrderableDBInstanceOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeOrderableDBInstanceOptions',
    '/#Action=DescribeOrderableDBInstanceOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeOrderableDBInstanceOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeOrderableDBInstanceOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeOrderableDBInstanceOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeOrderableDBInstanceOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeOrderableDBInstanceOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeOrderableDBInstanceOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeOrderableDBInstanceOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeOrderableDBInstanceOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeOrderableDBInstanceOptionsMutationKey() {
  return [
    '#Action=DescribeOrderableDBInstanceOptions',
    '/#Action=DescribeOrderableDBInstanceOptions',
    'POST',
  ] as const
}

export function getPostActionDescribeOrderableDBInstanceOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeOrderableDBInstanceOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeOrderableDBInstanceOptions'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeOrderableDBInstanceOptions<
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
                  ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeOrderableDBInstanceOptionsMutationOptions<
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

export function getActionDescribePendingMaintenanceActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribePendingMaintenanceActions',
    '/#Action=DescribePendingMaintenanceActions',
    keyArgs,
  ] as const
}

export function getActionDescribePendingMaintenanceActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribePendingMaintenanceActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribePendingMaintenanceActions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribePendingMaintenanceActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribePendingMaintenanceActionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribePendingMaintenanceActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribePendingMaintenanceActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribePendingMaintenanceActions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribePendingMaintenanceActionsMutationKey() {
  return [
    '#Action=DescribePendingMaintenanceActions',
    '/#Action=DescribePendingMaintenanceActions',
    'POST',
  ] as const
}

export function getPostActionDescribePendingMaintenanceActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribePendingMaintenanceActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribePendingMaintenanceActions'].$post(args, options))
    },
  })
}

export function usePostActionDescribePendingMaintenanceActions<
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
                  ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>,
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
  const mutationDefaults = getPostActionDescribePendingMaintenanceActionsMutationOptions<
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

export function getActionDescribeReservedDBInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeReservedDBInstances',
    '/#Action=DescribeReservedDBInstances',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedDBInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReservedDBInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReservedDBInstances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeReservedDBInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeReservedDBInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReservedDBInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReservedDBInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReservedDBInstances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeReservedDBInstancesMutationKey() {
  return [
    '#Action=DescribeReservedDBInstances',
    '/#Action=DescribeReservedDBInstances',
    'POST',
  ] as const
}

export function getPostActionDescribeReservedDBInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReservedDBInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeReservedDBInstances'].$post(args, options))
    },
  })
}

export function usePostActionDescribeReservedDBInstances<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>,
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
  const mutationDefaults = getPostActionDescribeReservedDBInstancesMutationOptions<
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

export function getActionDescribeReservedDBInstancesOfferingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeReservedDBInstancesOfferings',
    '/#Action=DescribeReservedDBInstancesOfferings',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedDBInstancesOfferingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeReservedDBInstancesOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeReservedDBInstancesOfferings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeReservedDBInstancesOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>
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
                    (typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']
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
                    (typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeReservedDBInstancesOfferingsQueryKey>
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
            ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeReservedDBInstancesOfferingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeReservedDBInstancesOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeReservedDBInstancesOfferings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeReservedDBInstancesOfferingsMutationKey() {
  return [
    '#Action=DescribeReservedDBInstancesOfferings',
    '/#Action=DescribeReservedDBInstancesOfferings',
    'POST',
  ] as const
}

export function getPostActionDescribeReservedDBInstancesOfferingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeReservedDBInstancesOfferingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeReservedDBInstancesOfferings'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeReservedDBInstancesOfferings<
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
                    (typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$post']
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
  const mutationDefaults = getPostActionDescribeReservedDBInstancesOfferingsMutationOptions<
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

export function getActionDescribeSourceRegionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeSourceRegions', '/#Action=DescribeSourceRegions', keyArgs] as const
}

export function getActionDescribeSourceRegionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeSourceRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeSourceRegions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeSourceRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeSourceRegionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeSourceRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeSourceRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeSourceRegions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeSourceRegionsMutationKey() {
  return ['#Action=DescribeSourceRegions', '/#Action=DescribeSourceRegions', 'POST'] as const
}

export function getPostActionDescribeSourceRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeSourceRegionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeSourceRegions'].$post(args, options))
    },
  })
}

export function usePostActionDescribeSourceRegions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeSourceRegionsMutationOptions<
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

export function getActionDescribeValidDBInstanceModificationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeValidDBInstanceModifications',
    '/#Action=DescribeValidDBInstanceModifications',
    keyArgs,
  ] as const
}

export function getActionDescribeValidDBInstanceModificationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeValidDBInstanceModificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeValidDBInstanceModifications'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeValidDBInstanceModifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>
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
                    (typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']
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
                    (typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeValidDBInstanceModificationsQueryKey>
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
            ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeValidDBInstanceModificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeValidDBInstanceModificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeValidDBInstanceModifications'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDescribeValidDBInstanceModificationsMutationKey() {
  return [
    '#Action=DescribeValidDBInstanceModifications',
    '/#Action=DescribeValidDBInstanceModifications',
    'POST',
  ] as const
}

export function getPostActionDescribeValidDBInstanceModificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeValidDBInstanceModificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=DescribeValidDBInstanceModifications']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=DescribeValidDBInstanceModifications'].$post(args, options),
      )
    },
  })
}

export function usePostActionDescribeValidDBInstanceModifications<
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
                    (typeof client)['#Action=DescribeValidDBInstanceModifications']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=DescribeValidDBInstanceModifications']['$post']
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
  const mutationDefaults = getPostActionDescribeValidDBInstanceModificationsMutationOptions<
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

export function getActionDownloadDBLogFilePortionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DownloadDBLogFilePortion', '/#Action=DownloadDBLogFilePortion', keyArgs] as const
}

export function getActionDownloadDBLogFilePortionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDownloadDBLogFilePortionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DownloadDBLogFilePortion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDownloadDBLogFilePortion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDownloadDBLogFilePortionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDownloadDBLogFilePortionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDownloadDBLogFilePortionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DownloadDBLogFilePortion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDownloadDBLogFilePortionMutationKey() {
  return ['#Action=DownloadDBLogFilePortion', '/#Action=DownloadDBLogFilePortion', 'POST'] as const
}

export function getPostActionDownloadDBLogFilePortionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDownloadDBLogFilePortionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>,
    ) {
      return parseResponse(client['#Action=DownloadDBLogFilePortion'].$post(args, options))
    },
  })
}

export function usePostActionDownloadDBLogFilePortion<
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
                Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>,
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
  const mutationDefaults = getPostActionDownloadDBLogFilePortionMutationOptions<
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

export function getActionFailoverDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=FailoverDBCluster', '/#Action=FailoverDBCluster', keyArgs] as const
}

export function getActionFailoverDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionFailoverDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=FailoverDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionFailoverDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionFailoverDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionFailoverDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionFailoverDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=FailoverDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionFailoverDBClusterMutationKey() {
  return ['#Action=FailoverDBCluster', '/#Action=FailoverDBCluster', 'POST'] as const
}

export function getPostActionFailoverDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionFailoverDBClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=FailoverDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionFailoverDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionFailoverDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionFailoverGlobalClusterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=FailoverGlobalCluster', '/#Action=FailoverGlobalCluster', keyArgs] as const
}

export function getActionFailoverGlobalClusterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionFailoverGlobalClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=FailoverGlobalCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionFailoverGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionFailoverGlobalClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionFailoverGlobalClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionFailoverGlobalClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=FailoverGlobalCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionFailoverGlobalClusterMutationKey() {
  return ['#Action=FailoverGlobalCluster', '/#Action=FailoverGlobalCluster', 'POST'] as const
}

export function getPostActionFailoverGlobalClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionFailoverGlobalClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=FailoverGlobalCluster'].$post(args, options))
    },
  })
}

export function usePostActionFailoverGlobalCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>,
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
  const mutationDefaults = getPostActionFailoverGlobalClusterMutationOptions<
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

export function getActionModifyActivityStreamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyActivityStream', '/#Action=ModifyActivityStream', keyArgs] as const
}

export function getActionModifyActivityStreamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyActivityStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyActivityStream'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyActivityStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyActivityStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyActivityStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyActivityStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyActivityStream'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyActivityStreamMutationKey() {
  return ['#Action=ModifyActivityStream', '/#Action=ModifyActivityStream', 'POST'] as const
}

export function getPostActionModifyActivityStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyActivityStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyActivityStream'].$post(args, options))
    },
  })
}

export function usePostActionModifyActivityStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$post']>,
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
  const mutationDefaults = getPostActionModifyActivityStreamMutationOptions<
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

export function getActionModifyCertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyCertificates', '/#Action=ModifyCertificates', keyArgs] as const
}

export function getActionModifyCertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyCertificates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyCertificatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyCertificates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyCertificatesMutationKey() {
  return ['#Action=ModifyCertificates', '/#Action=ModifyCertificates', 'POST'] as const
}

export function getPostActionModifyCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyCertificates'].$post(args, options))
    },
  })
}

export function usePostActionModifyCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyCertificates']['$post']>,
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
  const mutationDefaults = getPostActionModifyCertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyCurrentDBClusterCapacityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyCurrentDBClusterCapacity',
    '/#Action=ModifyCurrentDBClusterCapacity',
    keyArgs,
  ] as const
}

export function getActionModifyCurrentDBClusterCapacityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyCurrentDBClusterCapacityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyCurrentDBClusterCapacity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyCurrentDBClusterCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>
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
                  ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionModifyCurrentDBClusterCapacityQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyCurrentDBClusterCapacityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyCurrentDBClusterCapacityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyCurrentDBClusterCapacity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyCurrentDBClusterCapacityMutationKey() {
  return [
    '#Action=ModifyCurrentDBClusterCapacity',
    '/#Action=ModifyCurrentDBClusterCapacity',
    'POST',
  ] as const
}

export function getPostActionModifyCurrentDBClusterCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyCurrentDBClusterCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyCurrentDBClusterCapacity'].$post(args, options))
    },
  })
}

export function usePostActionModifyCurrentDBClusterCapacity<
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
                  ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>,
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
  const mutationDefaults = getPostActionModifyCurrentDBClusterCapacityMutationOptions<
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

export function getActionModifyCustomDBEngineVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyCustomDBEngineVersion',
    '/#Action=ModifyCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function getActionModifyCustomDBEngineVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyCustomDBEngineVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyCustomDBEngineVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyCustomDBEngineVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyCustomDBEngineVersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyCustomDBEngineVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyCustomDBEngineVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyCustomDBEngineVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyCustomDBEngineVersionMutationKey() {
  return [
    '#Action=ModifyCustomDBEngineVersion',
    '/#Action=ModifyCustomDBEngineVersion',
    'POST',
  ] as const
}

export function getPostActionModifyCustomDBEngineVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyCustomDBEngineVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyCustomDBEngineVersion'].$post(args, options))
    },
  })
}

export function usePostActionModifyCustomDBEngineVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>,
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
  const mutationDefaults = getPostActionModifyCustomDBEngineVersionMutationOptions<
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

export function getActionModifyDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBCluster', '/#Action=ModifyDBCluster', keyArgs] as const
}

export function getActionModifyDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBClusterMutationKey() {
  return ['#Action=ModifyDBCluster', '/#Action=ModifyDBCluster', 'POST'] as const
}

export function getPostActionModifyDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$post']>) {
      return parseResponse(client['#Action=ModifyDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyDBClusterEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBClusterEndpoint', '/#Action=ModifyDBClusterEndpoint', keyArgs] as const
}

export function getActionModifyDBClusterEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBClusterEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBClusterEndpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBClusterEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBClusterEndpointQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBClusterEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBClusterEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBClusterEndpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBClusterEndpointMutationKey() {
  return ['#Action=ModifyDBClusterEndpoint', '/#Action=ModifyDBClusterEndpoint', 'POST'] as const
}

export function getPostActionModifyDBClusterEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBClusterEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyDBClusterEndpoint'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBClusterEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBClusterEndpointMutationOptions<
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

export function getActionModifyDBClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyDBClusterParameterGroup',
    '/#Action=ModifyDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionModifyDBClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>
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
                  ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionModifyDBClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBClusterParameterGroupMutationKey() {
  return [
    '#Action=ModifyDBClusterParameterGroup',
    '/#Action=ModifyDBClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionModifyDBClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyDBClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBClusterParameterGroup<
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
                  ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBClusterParameterGroupMutationOptions<
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

export function getActionModifyDBClusterSnapshotAttributeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyDBClusterSnapshotAttribute',
    '/#Action=ModifyDBClusterSnapshotAttribute',
    keyArgs,
  ] as const
}

export function getActionModifyDBClusterSnapshotAttributeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBClusterSnapshotAttributeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBClusterSnapshotAttribute'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBClusterSnapshotAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>
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
                  ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionModifyDBClusterSnapshotAttributeQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBClusterSnapshotAttributeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBClusterSnapshotAttributeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBClusterSnapshotAttribute'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBClusterSnapshotAttributeMutationKey() {
  return [
    '#Action=ModifyDBClusterSnapshotAttribute',
    '/#Action=ModifyDBClusterSnapshotAttribute',
    'POST',
  ] as const
}

export function getPostActionModifyDBClusterSnapshotAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBClusterSnapshotAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyDBClusterSnapshotAttribute'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBClusterSnapshotAttribute<
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
                  ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBClusterSnapshotAttributeMutationOptions<
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

export function getActionModifyDBInstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBInstance', '/#Action=ModifyDBInstance', keyArgs] as const
}

export function getActionModifyDBInstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBInstance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBInstanceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBInstance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBInstanceMutationKey() {
  return ['#Action=ModifyDBInstance', '/#Action=ModifyDBInstance', 'POST'] as const
}

export function getPostActionModifyDBInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBInstanceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$post']>) {
      return parseResponse(client['#Action=ModifyDBInstance'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyDBParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBParameterGroup', '/#Action=ModifyDBParameterGroup', keyArgs] as const
}

export function getActionModifyDBParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBParameterGroupMutationKey() {
  return ['#Action=ModifyDBParameterGroup', '/#Action=ModifyDBParameterGroup', 'POST'] as const
}

export function getPostActionModifyDBParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyDBParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBParameterGroupMutationOptions<
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

export function getActionModifyDBProxyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBProxy', '/#Action=ModifyDBProxy', keyArgs] as const
}

export function getActionModifyDBProxyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBProxyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBProxy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBProxyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBProxyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBProxyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBProxy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBProxyMutationKey() {
  return ['#Action=ModifyDBProxy', '/#Action=ModifyDBProxy', 'POST'] as const
}

export function getPostActionModifyDBProxyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBProxyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$post']>) {
      return parseResponse(client['#Action=ModifyDBProxy'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBProxyMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyDBProxyEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBProxyEndpoint', '/#Action=ModifyDBProxyEndpoint', keyArgs] as const
}

export function getActionModifyDBProxyEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBProxyEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBProxyEndpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBProxyEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBProxyEndpointQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBProxyEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBProxyEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBProxyEndpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBProxyEndpointMutationKey() {
  return ['#Action=ModifyDBProxyEndpoint', '/#Action=ModifyDBProxyEndpoint', 'POST'] as const
}

export function getPostActionModifyDBProxyEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBProxyEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyDBProxyEndpoint'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBProxyEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBProxyEndpointMutationOptions<
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

export function getActionModifyDBProxyTargetGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBProxyTargetGroup', '/#Action=ModifyDBProxyTargetGroup', keyArgs] as const
}

export function getActionModifyDBProxyTargetGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBProxyTargetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBProxyTargetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBProxyTargetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBProxyTargetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBProxyTargetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBProxyTargetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBProxyTargetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBProxyTargetGroupMutationKey() {
  return ['#Action=ModifyDBProxyTargetGroup', '/#Action=ModifyDBProxyTargetGroup', 'POST'] as const
}

export function getPostActionModifyDBProxyTargetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBProxyTargetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyDBProxyTargetGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBProxyTargetGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBProxyTargetGroupMutationOptions<
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

export function getActionModifyDBSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBSnapshot', '/#Action=ModifyDBSnapshot', keyArgs] as const
}

export function getActionModifyDBSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBSnapshotMutationKey() {
  return ['#Action=ModifyDBSnapshot', '/#Action=ModifyDBSnapshot', 'POST'] as const
}

export function getPostActionModifyDBSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$post']>) {
      return parseResponse(client['#Action=ModifyDBSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBSnapshotMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyDBSnapshotAttributeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ModifyDBSnapshotAttribute',
    '/#Action=ModifyDBSnapshotAttribute',
    keyArgs,
  ] as const
}

export function getActionModifyDBSnapshotAttributeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBSnapshotAttributeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBSnapshotAttribute'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBSnapshotAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBSnapshotAttributeQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBSnapshotAttributeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBSnapshotAttributeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBSnapshotAttribute'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBSnapshotAttributeMutationKey() {
  return [
    '#Action=ModifyDBSnapshotAttribute',
    '/#Action=ModifyDBSnapshotAttribute',
    'POST',
  ] as const
}

export function getPostActionModifyDBSnapshotAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBSnapshotAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyDBSnapshotAttribute'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBSnapshotAttribute<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBSnapshotAttributeMutationOptions<
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

export function getActionModifyDBSubnetGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyDBSubnetGroup', '/#Action=ModifyDBSubnetGroup', keyArgs] as const
}

export function getActionModifyDBSubnetGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyDBSubnetGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyDBSubnetGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyDBSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyDBSubnetGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBSubnetGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyDBSubnetGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyDBSubnetGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyDBSubnetGroupMutationKey() {
  return ['#Action=ModifyDBSubnetGroup', '/#Action=ModifyDBSubnetGroup', 'POST'] as const
}

export function getPostActionModifyDBSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyDBSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyDBSubnetGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyDBSubnetGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>,
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
  const mutationDefaults = getPostActionModifyDBSubnetGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyEventSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', keyArgs] as const
}

export function getActionModifyEventSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyEventSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyEventSubscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyEventSubscriptionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyEventSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyEventSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyEventSubscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyEventSubscriptionMutationKey() {
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', 'POST'] as const
}

export function getPostActionModifyEventSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyEventSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyEventSubscription'].$post(args, options))
    },
  })
}

export function usePostActionModifyEventSubscription<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
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
  const mutationDefaults = getPostActionModifyEventSubscriptionMutationOptions<
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

export function getActionModifyGlobalClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyGlobalCluster', '/#Action=ModifyGlobalCluster', keyArgs] as const
}

export function getActionModifyGlobalClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyGlobalClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyGlobalCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyGlobalClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyGlobalClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyGlobalClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyGlobalCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyGlobalClusterMutationKey() {
  return ['#Action=ModifyGlobalCluster', '/#Action=ModifyGlobalCluster', 'POST'] as const
}

export function getPostActionModifyGlobalClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyGlobalClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyGlobalCluster'].$post(args, options))
    },
  })
}

export function usePostActionModifyGlobalCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>,
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
  const mutationDefaults = getPostActionModifyGlobalClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionModifyOptionGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ModifyOptionGroup', '/#Action=ModifyOptionGroup', keyArgs] as const
}

export function getActionModifyOptionGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionModifyOptionGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ModifyOptionGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionModifyOptionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionModifyOptionGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyOptionGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionModifyOptionGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ModifyOptionGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionModifyOptionGroupMutationKey() {
  return ['#Action=ModifyOptionGroup', '/#Action=ModifyOptionGroup', 'POST'] as const
}

export function getPostActionModifyOptionGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionModifyOptionGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ModifyOptionGroup'].$post(args, options))
    },
  })
}

export function usePostActionModifyOptionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$post']>,
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
  const mutationDefaults = getPostActionModifyOptionGroupMutationOptions<TError, TOnMutateResult>(
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

export function getActionPromoteReadReplicaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=PromoteReadReplica', '/#Action=PromoteReadReplica', keyArgs] as const
}

export function getActionPromoteReadReplicaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPromoteReadReplicaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PromoteReadReplica'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPromoteReadReplica<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPromoteReadReplicaQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPromoteReadReplicaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPromoteReadReplicaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PromoteReadReplica'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPromoteReadReplicaMutationKey() {
  return ['#Action=PromoteReadReplica', '/#Action=PromoteReadReplica', 'POST'] as const
}

export function getPostActionPromoteReadReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPromoteReadReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$post']>,
    ) {
      return parseResponse(client['#Action=PromoteReadReplica'].$post(args, options))
    },
  })
}

export function usePostActionPromoteReadReplica<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$post']>,
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
  const mutationDefaults = getPostActionPromoteReadReplicaMutationOptions<TError, TOnMutateResult>(
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

export function getActionPromoteReadReplicaDBClusterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PromoteReadReplicaDBCluster',
    '/#Action=PromoteReadReplicaDBCluster',
    keyArgs,
  ] as const
}

export function getActionPromoteReadReplicaDBClusterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPromoteReadReplicaDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PromoteReadReplicaDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPromoteReadReplicaDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPromoteReadReplicaDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPromoteReadReplicaDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPromoteReadReplicaDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PromoteReadReplicaDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPromoteReadReplicaDBClusterMutationKey() {
  return [
    '#Action=PromoteReadReplicaDBCluster',
    '/#Action=PromoteReadReplicaDBCluster',
    'POST',
  ] as const
}

export function getPostActionPromoteReadReplicaDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPromoteReadReplicaDBClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=PromoteReadReplicaDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionPromoteReadReplicaDBCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionPromoteReadReplicaDBClusterMutationOptions<
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

export function getActionPurchaseReservedDBInstancesOfferingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=PurchaseReservedDBInstancesOffering',
    '/#Action=PurchaseReservedDBInstancesOffering',
    keyArgs,
  ] as const
}

export function getActionPurchaseReservedDBInstancesOfferingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPurchaseReservedDBInstancesOfferingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PurchaseReservedDBInstancesOffering'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPurchaseReservedDBInstancesOffering<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
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
                  ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionPurchaseReservedDBInstancesOfferingQueryKey>
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
            ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPurchaseReservedDBInstancesOfferingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPurchaseReservedDBInstancesOfferingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PurchaseReservedDBInstancesOffering'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPurchaseReservedDBInstancesOfferingMutationKey() {
  return [
    '#Action=PurchaseReservedDBInstancesOffering',
    '/#Action=PurchaseReservedDBInstancesOffering',
    'POST',
  ] as const
}

export function getPostActionPurchaseReservedDBInstancesOfferingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPurchaseReservedDBInstancesOfferingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=PurchaseReservedDBInstancesOffering'].$post(args, options),
      )
    },
  })
}

export function usePostActionPurchaseReservedDBInstancesOffering<
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
                    (typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']>,
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
  const mutationDefaults = getPostActionPurchaseReservedDBInstancesOfferingMutationOptions<
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

export function getActionRebootDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RebootDBCluster', '/#Action=RebootDBCluster', keyArgs] as const
}

export function getActionRebootDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRebootDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RebootDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRebootDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRebootDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRebootDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRebootDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RebootDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRebootDBClusterMutationKey() {
  return ['#Action=RebootDBCluster', '/#Action=RebootDBCluster', 'POST'] as const
}

export function getPostActionRebootDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RebootDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRebootDBClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$post']>) {
      return parseResponse(client['#Action=RebootDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionRebootDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RebootDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionRebootDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionRebootDBInstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RebootDBInstance', '/#Action=RebootDBInstance', keyArgs] as const
}

export function getActionRebootDBInstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRebootDBInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RebootDBInstance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRebootDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRebootDBInstanceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRebootDBInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRebootDBInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RebootDBInstance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRebootDBInstanceMutationKey() {
  return ['#Action=RebootDBInstance', '/#Action=RebootDBInstance', 'POST'] as const
}

export function getPostActionRebootDBInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RebootDBInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRebootDBInstanceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$post']>) {
      return parseResponse(client['#Action=RebootDBInstance'].$post(args, options))
    },
  })
}

export function usePostActionRebootDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RebootDBInstance']['$post']>,
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
  const mutationDefaults = getPostActionRebootDBInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getActionRegisterDBProxyTargetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RegisterDBProxyTargets', '/#Action=RegisterDBProxyTargets', keyArgs] as const
}

export function getActionRegisterDBProxyTargetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRegisterDBProxyTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RegisterDBProxyTargets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRegisterDBProxyTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRegisterDBProxyTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRegisterDBProxyTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRegisterDBProxyTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RegisterDBProxyTargets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRegisterDBProxyTargetsMutationKey() {
  return ['#Action=RegisterDBProxyTargets', '/#Action=RegisterDBProxyTargets', 'POST'] as const
}

export function getPostActionRegisterDBProxyTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRegisterDBProxyTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>,
    ) {
      return parseResponse(client['#Action=RegisterDBProxyTargets'].$post(args, options))
    },
  })
}

export function usePostActionRegisterDBProxyTargets<
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
                Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>,
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
  const mutationDefaults = getPostActionRegisterDBProxyTargetsMutationOptions<
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

export function getActionRemoveFromGlobalClusterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RemoveFromGlobalCluster', '/#Action=RemoveFromGlobalCluster', keyArgs] as const
}

export function getActionRemoveFromGlobalClusterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveFromGlobalClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveFromGlobalCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveFromGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRemoveFromGlobalClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveFromGlobalClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveFromGlobalClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveFromGlobalCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemoveFromGlobalClusterMutationKey() {
  return ['#Action=RemoveFromGlobalCluster', '/#Action=RemoveFromGlobalCluster', 'POST'] as const
}

export function getPostActionRemoveFromGlobalClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveFromGlobalClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=RemoveFromGlobalCluster'].$post(args, options))
    },
  })
}

export function usePostActionRemoveFromGlobalCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>,
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
  const mutationDefaults = getPostActionRemoveFromGlobalClusterMutationOptions<
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

export function getActionRemoveRoleFromDBClusterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RemoveRoleFromDBCluster', '/#Action=RemoveRoleFromDBCluster', keyArgs] as const
}

export function getActionRemoveRoleFromDBClusterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveRoleFromDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveRoleFromDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveRoleFromDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRemoveRoleFromDBClusterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveRoleFromDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveRoleFromDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveRoleFromDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemoveRoleFromDBClusterMutationKey() {
  return ['#Action=RemoveRoleFromDBCluster', '/#Action=RemoveRoleFromDBCluster', 'POST'] as const
}

export function getPostActionRemoveRoleFromDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveRoleFromDBClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>,
    ) {
      return parseResponse(client['#Action=RemoveRoleFromDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionRemoveRoleFromDBCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionRemoveRoleFromDBClusterMutationOptions<
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

export function getActionRemoveRoleFromDBInstanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RemoveRoleFromDBInstance', '/#Action=RemoveRoleFromDBInstance', keyArgs] as const
}

export function getActionRemoveRoleFromDBInstanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveRoleFromDBInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveRoleFromDBInstance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveRoleFromDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRemoveRoleFromDBInstanceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveRoleFromDBInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveRoleFromDBInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveRoleFromDBInstance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemoveRoleFromDBInstanceMutationKey() {
  return ['#Action=RemoveRoleFromDBInstance', '/#Action=RemoveRoleFromDBInstance', 'POST'] as const
}

export function getPostActionRemoveRoleFromDBInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveRoleFromDBInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>,
    ) {
      return parseResponse(client['#Action=RemoveRoleFromDBInstance'].$post(args, options))
    },
  })
}

export function usePostActionRemoveRoleFromDBInstance<
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
                Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>,
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
  const mutationDefaults = getPostActionRemoveRoleFromDBInstanceMutationOptions<
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

export function getActionRemoveSourceIdentifierFromSubscriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RemoveSourceIdentifierFromSubscription',
    '/#Action=RemoveSourceIdentifierFromSubscription',
    keyArgs,
  ] as const
}

export function getActionRemoveSourceIdentifierFromSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRemoveSourceIdentifierFromSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RemoveSourceIdentifierFromSubscription'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRemoveSourceIdentifierFromSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
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
                    (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']
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
                    (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionRemoveSourceIdentifierFromSubscriptionQueryKey>
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
            ReturnType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemoveSourceIdentifierFromSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRemoveSourceIdentifierFromSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RemoveSourceIdentifierFromSubscription'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRemoveSourceIdentifierFromSubscriptionMutationKey() {
  return [
    '#Action=RemoveSourceIdentifierFromSubscription',
    '/#Action=RemoveSourceIdentifierFromSubscription',
    'POST',
  ] as const
}

export function getPostActionRemoveSourceIdentifierFromSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemoveSourceIdentifierFromSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=RemoveSourceIdentifierFromSubscription'].$post(args, options),
      )
    },
  })
}

export function usePostActionRemoveSourceIdentifierFromSubscription<
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
                    (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$post']
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
  const mutationDefaults = getPostActionRemoveSourceIdentifierFromSubscriptionMutationOptions<
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

export function getActionResetDBClusterParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=ResetDBClusterParameterGroup',
    '/#Action=ResetDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionResetDBClusterParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResetDBClusterParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResetDBClusterParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResetDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionResetDBClusterParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResetDBClusterParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResetDBClusterParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResetDBClusterParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionResetDBClusterParameterGroupMutationKey() {
  return [
    '#Action=ResetDBClusterParameterGroup',
    '/#Action=ResetDBClusterParameterGroup',
    'POST',
  ] as const
}

export function getPostActionResetDBClusterParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResetDBClusterParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ResetDBClusterParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionResetDBClusterParameterGroup<
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
                  ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionResetDBClusterParameterGroupMutationOptions<
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

export function getActionResetDBParameterGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ResetDBParameterGroup', '/#Action=ResetDBParameterGroup', keyArgs] as const
}

export function getActionResetDBParameterGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionResetDBParameterGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ResetDBParameterGroup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionResetDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionResetDBParameterGroupQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionResetDBParameterGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionResetDBParameterGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ResetDBParameterGroup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionResetDBParameterGroupMutationKey() {
  return ['#Action=ResetDBParameterGroup', '/#Action=ResetDBParameterGroup', 'POST'] as const
}

export function getPostActionResetDBParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionResetDBParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>,
    ) {
      return parseResponse(client['#Action=ResetDBParameterGroup'].$post(args, options))
    },
  })
}

export function usePostActionResetDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>,
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
  const mutationDefaults = getPostActionResetDBParameterGroupMutationOptions<
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

export function getActionRestoreDBClusterFromS3QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RestoreDBClusterFromS3', '/#Action=RestoreDBClusterFromS3', keyArgs] as const
}

export function getActionRestoreDBClusterFromS3QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestoreDBClusterFromS3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestoreDBClusterFromS3'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestoreDBClusterFromS3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRestoreDBClusterFromS3QueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestoreDBClusterFromS3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestoreDBClusterFromS3QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestoreDBClusterFromS3'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestoreDBClusterFromS3MutationKey() {
  return ['#Action=RestoreDBClusterFromS3', '/#Action=RestoreDBClusterFromS3', 'POST'] as const
}

export function getPostActionRestoreDBClusterFromS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestoreDBClusterFromS3MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>,
    ) {
      return parseResponse(client['#Action=RestoreDBClusterFromS3'].$post(args, options))
    },
  })
}

export function usePostActionRestoreDBClusterFromS3<
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
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>,
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
  const mutationDefaults = getPostActionRestoreDBClusterFromS3MutationOptions<
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

export function getActionRestoreDBClusterFromSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RestoreDBClusterFromSnapshot',
    '/#Action=RestoreDBClusterFromSnapshot',
    keyArgs,
  ] as const
}

export function getActionRestoreDBClusterFromSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestoreDBClusterFromSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestoreDBClusterFromSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestoreDBClusterFromSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRestoreDBClusterFromSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestoreDBClusterFromSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestoreDBClusterFromSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestoreDBClusterFromSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestoreDBClusterFromSnapshotMutationKey() {
  return [
    '#Action=RestoreDBClusterFromSnapshot',
    '/#Action=RestoreDBClusterFromSnapshot',
    'POST',
  ] as const
}

export function getPostActionRestoreDBClusterFromSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestoreDBClusterFromSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=RestoreDBClusterFromSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionRestoreDBClusterFromSnapshot<
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
                  ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionRestoreDBClusterFromSnapshotMutationOptions<
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

export function getActionRestoreDBClusterToPointInTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RestoreDBClusterToPointInTime',
    '/#Action=RestoreDBClusterToPointInTime',
    keyArgs,
  ] as const
}

export function getActionRestoreDBClusterToPointInTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestoreDBClusterToPointInTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestoreDBClusterToPointInTime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestoreDBClusterToPointInTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>
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
                  ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRestoreDBClusterToPointInTimeQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestoreDBClusterToPointInTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestoreDBClusterToPointInTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestoreDBClusterToPointInTime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestoreDBClusterToPointInTimeMutationKey() {
  return [
    '#Action=RestoreDBClusterToPointInTime',
    '/#Action=RestoreDBClusterToPointInTime',
    'POST',
  ] as const
}

export function getPostActionRestoreDBClusterToPointInTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestoreDBClusterToPointInTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>,
    ) {
      return parseResponse(client['#Action=RestoreDBClusterToPointInTime'].$post(args, options))
    },
  })
}

export function usePostActionRestoreDBClusterToPointInTime<
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
                  ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>,
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
  const mutationDefaults = getPostActionRestoreDBClusterToPointInTimeMutationOptions<
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

export function getActionRestoreDBInstanceFromDBSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RestoreDBInstanceFromDBSnapshot',
    '/#Action=RestoreDBInstanceFromDBSnapshot',
    keyArgs,
  ] as const
}

export function getActionRestoreDBInstanceFromDBSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestoreDBInstanceFromDBSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestoreDBInstanceFromDBSnapshot'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestoreDBInstanceFromDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>
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
                  ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRestoreDBInstanceFromDBSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestoreDBInstanceFromDBSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestoreDBInstanceFromDBSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestoreDBInstanceFromDBSnapshot'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestoreDBInstanceFromDBSnapshotMutationKey() {
  return [
    '#Action=RestoreDBInstanceFromDBSnapshot',
    '/#Action=RestoreDBInstanceFromDBSnapshot',
    'POST',
  ] as const
}

export function getPostActionRestoreDBInstanceFromDBSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestoreDBInstanceFromDBSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>,
    ) {
      return parseResponse(client['#Action=RestoreDBInstanceFromDBSnapshot'].$post(args, options))
    },
  })
}

export function usePostActionRestoreDBInstanceFromDBSnapshot<
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
                  ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>,
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
  const mutationDefaults = getPostActionRestoreDBInstanceFromDBSnapshotMutationOptions<
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

export function getActionRestoreDBInstanceFromS3QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=RestoreDBInstanceFromS3', '/#Action=RestoreDBInstanceFromS3', keyArgs] as const
}

export function getActionRestoreDBInstanceFromS3QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestoreDBInstanceFromS3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestoreDBInstanceFromS3'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestoreDBInstanceFromS3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRestoreDBInstanceFromS3QueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestoreDBInstanceFromS3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestoreDBInstanceFromS3QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestoreDBInstanceFromS3'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestoreDBInstanceFromS3MutationKey() {
  return ['#Action=RestoreDBInstanceFromS3', '/#Action=RestoreDBInstanceFromS3', 'POST'] as const
}

export function getPostActionRestoreDBInstanceFromS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestoreDBInstanceFromS3MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>,
    ) {
      return parseResponse(client['#Action=RestoreDBInstanceFromS3'].$post(args, options))
    },
  })
}

export function usePostActionRestoreDBInstanceFromS3<
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
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>,
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
  const mutationDefaults = getPostActionRestoreDBInstanceFromS3MutationOptions<
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

export function getActionRestoreDBInstanceToPointInTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RestoreDBInstanceToPointInTime',
    '/#Action=RestoreDBInstanceToPointInTime',
    keyArgs,
  ] as const
}

export function getActionRestoreDBInstanceToPointInTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRestoreDBInstanceToPointInTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RestoreDBInstanceToPointInTime'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRestoreDBInstanceToPointInTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>
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
                  ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionRestoreDBInstanceToPointInTimeQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRestoreDBInstanceToPointInTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRestoreDBInstanceToPointInTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RestoreDBInstanceToPointInTime'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRestoreDBInstanceToPointInTimeMutationKey() {
  return [
    '#Action=RestoreDBInstanceToPointInTime',
    '/#Action=RestoreDBInstanceToPointInTime',
    'POST',
  ] as const
}

export function getPostActionRestoreDBInstanceToPointInTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestoreDBInstanceToPointInTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>,
    ) {
      return parseResponse(client['#Action=RestoreDBInstanceToPointInTime'].$post(args, options))
    },
  })
}

export function usePostActionRestoreDBInstanceToPointInTime<
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
                  ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>,
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
  const mutationDefaults = getPostActionRestoreDBInstanceToPointInTimeMutationOptions<
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

export function getActionRevokeDBSecurityGroupIngressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=RevokeDBSecurityGroupIngress',
    '/#Action=RevokeDBSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionRevokeDBSecurityGroupIngressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionRevokeDBSecurityGroupIngressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=RevokeDBSecurityGroupIngress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionRevokeDBSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionRevokeDBSecurityGroupIngressQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRevokeDBSecurityGroupIngressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionRevokeDBSecurityGroupIngressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=RevokeDBSecurityGroupIngress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionRevokeDBSecurityGroupIngressMutationKey() {
  return [
    '#Action=RevokeDBSecurityGroupIngress',
    '/#Action=RevokeDBSecurityGroupIngress',
    'POST',
  ] as const
}

export function getPostActionRevokeDBSecurityGroupIngressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRevokeDBSecurityGroupIngressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>,
    ) {
      return parseResponse(client['#Action=RevokeDBSecurityGroupIngress'].$post(args, options))
    },
  })
}

export function usePostActionRevokeDBSecurityGroupIngress<
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
                  ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>,
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
  const mutationDefaults = getPostActionRevokeDBSecurityGroupIngressMutationOptions<
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

export function getActionStartActivityStreamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StartActivityStream', '/#Action=StartActivityStream', keyArgs] as const
}

export function getActionStartActivityStreamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStartActivityStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StartActivityStream'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStartActivityStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStartActivityStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartActivityStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStartActivityStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StartActivityStream'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStartActivityStreamMutationKey() {
  return ['#Action=StartActivityStream', '/#Action=StartActivityStream', 'POST'] as const
}

export function getPostActionStartActivityStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StartActivityStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartActivityStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=StartActivityStream']['$post']>,
    ) {
      return parseResponse(client['#Action=StartActivityStream'].$post(args, options))
    },
  })
}

export function usePostActionStartActivityStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StartActivityStream']['$post']>,
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
  const mutationDefaults = getPostActionStartActivityStreamMutationOptions<TError, TOnMutateResult>(
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

export function getActionStartDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StartDBCluster', '/#Action=StartDBCluster', keyArgs] as const
}

export function getActionStartDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStartDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StartDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStartDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStartDBClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStartDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StartDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStartDBClusterMutationKey() {
  return ['#Action=StartDBCluster', '/#Action=StartDBCluster', 'POST'] as const
}

export function getPostActionStartDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StartDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartDBClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=StartDBCluster']['$post']>) {
      return parseResponse(client['#Action=StartDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionStartDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StartDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionStartDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionStartDBInstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StartDBInstance', '/#Action=StartDBInstance', keyArgs] as const
}

export function getActionStartDBInstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStartDBInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StartDBInstance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStartDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStartDBInstanceQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartDBInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStartDBInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StartDBInstance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStartDBInstanceMutationKey() {
  return ['#Action=StartDBInstance', '/#Action=StartDBInstance', 'POST'] as const
}

export function getPostActionStartDBInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StartDBInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartDBInstanceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=StartDBInstance']['$post']>) {
      return parseResponse(client['#Action=StartDBInstance'].$post(args, options))
    },
  })
}

export function usePostActionStartDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StartDBInstance']['$post']>,
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
  const mutationDefaults = getPostActionStartDBInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getActionStartDBInstanceAutomatedBackupsReplicationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=StartDBInstanceAutomatedBackupsReplication',
    '/#Action=StartDBInstanceAutomatedBackupsReplication',
    keyArgs,
  ] as const
}

export function getActionStartDBInstanceAutomatedBackupsReplicationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStartDBInstanceAutomatedBackupsReplicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StartDBInstanceAutomatedBackupsReplication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStartDBInstanceAutomatedBackupsReplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']>
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
                    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
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
                    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionStartDBInstanceAutomatedBackupsReplicationQueryKey>
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
              (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartDBInstanceAutomatedBackupsReplicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStartDBInstanceAutomatedBackupsReplicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StartDBInstanceAutomatedBackupsReplication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStartDBInstanceAutomatedBackupsReplicationMutationKey() {
  return [
    '#Action=StartDBInstanceAutomatedBackupsReplication',
    '/#Action=StartDBInstanceAutomatedBackupsReplication',
    'POST',
  ] as const
}

export function getPostActionStartDBInstanceAutomatedBackupsReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartDBInstanceAutomatedBackupsReplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=StartDBInstanceAutomatedBackupsReplication'].$post(args, options),
      )
    },
  })
}

export function usePostActionStartDBInstanceAutomatedBackupsReplication<
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
                    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$post']
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
  const mutationDefaults = getPostActionStartDBInstanceAutomatedBackupsReplicationMutationOptions<
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

export function getActionStartExportTaskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StartExportTask', '/#Action=StartExportTask', keyArgs] as const
}

export function getActionStartExportTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStartExportTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StartExportTask'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStartExportTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStartExportTaskQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartExportTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStartExportTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StartExportTask'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStartExportTaskMutationKey() {
  return ['#Action=StartExportTask', '/#Action=StartExportTask', 'POST'] as const
}

export function getPostActionStartExportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StartExportTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStartExportTaskMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=StartExportTask']['$post']>) {
      return parseResponse(client['#Action=StartExportTask'].$post(args, options))
    },
  })
}

export function usePostActionStartExportTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StartExportTask']['$post']>,
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
  const mutationDefaults = getPostActionStartExportTaskMutationOptions<TError, TOnMutateResult>(
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

export function getActionStopActivityStreamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StopActivityStream', '/#Action=StopActivityStream', keyArgs] as const
}

export function getActionStopActivityStreamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStopActivityStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StopActivityStream'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStopActivityStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStopActivityStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStopActivityStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStopActivityStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StopActivityStream'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStopActivityStreamMutationKey() {
  return ['#Action=StopActivityStream', '/#Action=StopActivityStream', 'POST'] as const
}

export function getPostActionStopActivityStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StopActivityStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStopActivityStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=StopActivityStream']['$post']>,
    ) {
      return parseResponse(client['#Action=StopActivityStream'].$post(args, options))
    },
  })
}

export function usePostActionStopActivityStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StopActivityStream']['$post']>,
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
  const mutationDefaults = getPostActionStopActivityStreamMutationOptions<TError, TOnMutateResult>(
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

export function getActionStopDBClusterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StopDBCluster', '/#Action=StopDBCluster', keyArgs] as const
}

export function getActionStopDBClusterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStopDBClusterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StopDBCluster'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStopDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStopDBClusterQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStopDBClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStopDBClusterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StopDBCluster'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStopDBClusterMutationKey() {
  return ['#Action=StopDBCluster', '/#Action=StopDBCluster', 'POST'] as const
}

export function getPostActionStopDBClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StopDBCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStopDBClusterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=StopDBCluster']['$post']>) {
      return parseResponse(client['#Action=StopDBCluster'].$post(args, options))
    },
  })
}

export function usePostActionStopDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StopDBCluster']['$post']>,
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
  const mutationDefaults = getPostActionStopDBClusterMutationOptions<TError, TOnMutateResult>(
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

export function getActionStopDBInstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=StopDBInstance', '/#Action=StopDBInstance', keyArgs] as const
}

export function getActionStopDBInstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStopDBInstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StopDBInstance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStopDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionStopDBInstanceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStopDBInstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStopDBInstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StopDBInstance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStopDBInstanceMutationKey() {
  return ['#Action=StopDBInstance', '/#Action=StopDBInstance', 'POST'] as const
}

export function getPostActionStopDBInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StopDBInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStopDBInstanceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=StopDBInstance']['$post']>) {
      return parseResponse(client['#Action=StopDBInstance'].$post(args, options))
    },
  })
}

export function usePostActionStopDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StopDBInstance']['$post']>,
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
  const mutationDefaults = getPostActionStopDBInstanceMutationOptions<TError, TOnMutateResult>(
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

export function getActionStopDBInstanceAutomatedBackupsReplicationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=StopDBInstanceAutomatedBackupsReplication',
    '/#Action=StopDBInstanceAutomatedBackupsReplication',
    keyArgs,
  ] as const
}

export function getActionStopDBInstanceAutomatedBackupsReplicationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionStopDBInstanceAutomatedBackupsReplicationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=StopDBInstanceAutomatedBackupsReplication'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionStopDBInstanceAutomatedBackupsReplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']>
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
                    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
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
                    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActionStopDBInstanceAutomatedBackupsReplicationQueryKey>
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
            ReturnType<(typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStopDBInstanceAutomatedBackupsReplicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionStopDBInstanceAutomatedBackupsReplicationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=StopDBInstanceAutomatedBackupsReplication'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionStopDBInstanceAutomatedBackupsReplicationMutationKey() {
  return [
    '#Action=StopDBInstanceAutomatedBackupsReplication',
    '/#Action=StopDBInstanceAutomatedBackupsReplication',
    'POST',
  ] as const
}

export function getPostActionStopDBInstanceAutomatedBackupsReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionStopDBInstanceAutomatedBackupsReplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=StopDBInstanceAutomatedBackupsReplication'].$post(args, options),
      )
    },
  })
}

export function usePostActionStopDBInstanceAutomatedBackupsReplication<
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
                    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$post']
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
  const mutationDefaults = getPostActionStopDBInstanceAutomatedBackupsReplicationMutationOptions<
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

export function getActionSwitchoverBlueGreenDeploymentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=SwitchoverBlueGreenDeployment',
    '/#Action=SwitchoverBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function getActionSwitchoverBlueGreenDeploymentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSwitchoverBlueGreenDeploymentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SwitchoverBlueGreenDeployment'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSwitchoverBlueGreenDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>
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
                  ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionSwitchoverBlueGreenDeploymentQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSwitchoverBlueGreenDeploymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSwitchoverBlueGreenDeploymentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SwitchoverBlueGreenDeployment'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSwitchoverBlueGreenDeploymentMutationKey() {
  return [
    '#Action=SwitchoverBlueGreenDeployment',
    '/#Action=SwitchoverBlueGreenDeployment',
    'POST',
  ] as const
}

export function getPostActionSwitchoverBlueGreenDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSwitchoverBlueGreenDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>,
    ) {
      return parseResponse(client['#Action=SwitchoverBlueGreenDeployment'].$post(args, options))
    },
  })
}

export function usePostActionSwitchoverBlueGreenDeployment<
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
                  ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>,
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
  const mutationDefaults = getPostActionSwitchoverBlueGreenDeploymentMutationOptions<
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

export function getActionSwitchoverReadReplicaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=SwitchoverReadReplica', '/#Action=SwitchoverReadReplica', keyArgs] as const
}

export function getActionSwitchoverReadReplicaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSwitchoverReadReplicaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=SwitchoverReadReplica'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSwitchoverReadReplica<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionSwitchoverReadReplicaQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSwitchoverReadReplicaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSwitchoverReadReplicaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=SwitchoverReadReplica'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSwitchoverReadReplicaMutationKey() {
  return ['#Action=SwitchoverReadReplica', '/#Action=SwitchoverReadReplica', 'POST'] as const
}

export function getPostActionSwitchoverReadReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSwitchoverReadReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>,
    ) {
      return parseResponse(client['#Action=SwitchoverReadReplica'].$post(args, options))
    },
  })
}

export function usePostActionSwitchoverReadReplica<
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
                Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>,
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
  const mutationDefaults = getPostActionSwitchoverReadReplicaMutationOptions<
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
