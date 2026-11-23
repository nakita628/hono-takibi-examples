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
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddRoleToDBCluster', '/#Action=AddRoleToDBCluster', keyArgs] as const
}

export function getActionAddRoleToDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionAddRoleToDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AddRoleToDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionAddRoleToDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionAddRoleToDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionAddRoleToDBCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>,
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
    const mutationDefaults = getPostActionAddRoleToDBClusterMutationOptions<
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

export function getActionAddRoleToDBInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddRoleToDBInstance', '/#Action=AddRoleToDBInstance', keyArgs] as const
}

export function getActionAddRoleToDBInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionAddRoleToDBInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AddRoleToDBInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionAddRoleToDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionAddRoleToDBInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionAddRoleToDBInstance<
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
                Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>,
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
    const mutationDefaults = getPostActionAddRoleToDBInstanceMutationOptions<
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

export function getActionAddSourceIdentifierToSubscriptionQueryKey(
  args: InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AddSourceIdentifierToSubscription',
    '/#Action=AddSourceIdentifierToSubscription',
    keyArgs,
  ] as const
}

export function getActionAddSourceIdentifierToSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionAddSourceIdentifierToSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AddSourceIdentifierToSubscription'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionAddSourceIdentifierToSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionAddSourceIdentifierToSubscriptionQueryKey>
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
      ...getActionAddSourceIdentifierToSubscriptionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionAddSourceIdentifierToSubscription<
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
                  ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>,
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
    const mutationDefaults = getPostActionAddSourceIdentifierToSubscriptionMutationOptions<
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

export function createActionAddTagsToResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionAddTagsToResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionAddTagsToResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionAddTagsToResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionApplyPendingMaintenanceActionQueryKey(
  args: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ApplyPendingMaintenanceAction',
    '/#Action=ApplyPendingMaintenanceAction',
    keyArgs,
  ] as const
}

export function getActionApplyPendingMaintenanceActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionApplyPendingMaintenanceActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ApplyPendingMaintenanceAction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionApplyPendingMaintenanceAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionApplyPendingMaintenanceActionQueryKey>
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
      ...getActionApplyPendingMaintenanceActionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionApplyPendingMaintenanceAction<
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
                  ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>,
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
    const mutationDefaults = getPostActionApplyPendingMaintenanceActionMutationOptions<
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

export function getActionAuthorizeDBSecurityGroupIngressQueryKey(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AuthorizeDBSecurityGroupIngress',
    '/#Action=AuthorizeDBSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionAuthorizeDBSecurityGroupIngressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionAuthorizeDBSecurityGroupIngressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AuthorizeDBSecurityGroupIngress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionAuthorizeDBSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionAuthorizeDBSecurityGroupIngressQueryKey>
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
      ...getActionAuthorizeDBSecurityGroupIngressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionAuthorizeDBSecurityGroupIngress<
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
                  ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>,
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
    const mutationDefaults = getPostActionAuthorizeDBSecurityGroupIngressMutationOptions<
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

export function getActionBacktrackDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=BacktrackDBCluster', '/#Action=BacktrackDBCluster', keyArgs] as const
}

export function getActionBacktrackDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionBacktrackDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=BacktrackDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionBacktrackDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionBacktrackDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionBacktrackDBCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$post']>,
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
    const mutationDefaults = getPostActionBacktrackDBClusterMutationOptions<
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

export function getActionCancelExportTaskQueryKey(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CancelExportTask', '/#Action=CancelExportTask', keyArgs] as const
}

export function getActionCancelExportTaskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCancelExportTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CancelExportTask'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCancelExportTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCancelExportTaskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCancelExportTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCancelExportTaskMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCopyDBClusterParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CopyDBClusterParameterGroup',
    '/#Action=CopyDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionCopyDBClusterParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCopyDBClusterParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CopyDBClusterParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCopyDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCopyDBClusterParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCopyDBClusterParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionCopyDBClusterParameterGroupMutationOptions<
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

export function getActionCopyDBClusterSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyDBClusterSnapshot', '/#Action=CopyDBClusterSnapshot', keyArgs] as const
}

export function getActionCopyDBClusterSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCopyDBClusterSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CopyDBClusterSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCopyDBClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCopyDBClusterSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCopyDBClusterSnapshot<
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
                Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>,
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
    const mutationDefaults = getPostActionCopyDBClusterSnapshotMutationOptions<
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

export function getActionCopyDBParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyDBParameterGroup', '/#Action=CopyDBParameterGroup', keyArgs] as const
}

export function getActionCopyDBParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCopyDBParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CopyDBParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCopyDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCopyDBParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCopyDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionCopyDBParameterGroupMutationOptions<
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

export function getActionCopyDBSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyDBSnapshot', '/#Action=CopyDBSnapshot', keyArgs] as const
}

export function getActionCopyDBSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCopyDBSnapshotQueryKey>
  >({
    queryKey: getActionCopyDBSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CopyDBSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCopyDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionCopyDBSnapshotQueryKey>
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
      ...getActionCopyDBSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCopyDBSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCopyDBSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCopyOptionGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyOptionGroup', '/#Action=CopyOptionGroup', keyArgs] as const
}

export function getActionCopyOptionGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCopyOptionGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CopyOptionGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCopyOptionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCopyOptionGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCopyOptionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCopyOptionGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCreateBlueGreenDeploymentQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateBlueGreenDeployment',
    '/#Action=CreateBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function getActionCreateBlueGreenDeploymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateBlueGreenDeploymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateBlueGreenDeployment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateBlueGreenDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateBlueGreenDeploymentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateBlueGreenDeployment<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>,
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
    const mutationDefaults = getPostActionCreateBlueGreenDeploymentMutationOptions<
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

export function getActionCreateCustomDBEngineVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateCustomDBEngineVersion',
    '/#Action=CreateCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function getActionCreateCustomDBEngineVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateCustomDBEngineVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateCustomDBEngineVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateCustomDBEngineVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateCustomDBEngineVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateCustomDBEngineVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>,
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
    const mutationDefaults = getPostActionCreateCustomDBEngineVersionMutationOptions<
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

export function getActionCreateDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBCluster', '/#Action=CreateDBCluster', keyArgs] as const
}

export function getActionCreateDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCreateDBClusterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCreateDBClusterEndpointQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBClusterEndpoint', '/#Action=CreateDBClusterEndpoint', keyArgs] as const
}

export function getActionCreateDBClusterEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBClusterEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBClusterEndpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBClusterEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBClusterEndpointQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBClusterEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>,
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
    const mutationDefaults = getPostActionCreateDBClusterEndpointMutationOptions<
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

export function getActionCreateDBClusterParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateDBClusterParameterGroup',
    '/#Action=CreateDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionCreateDBClusterParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBClusterParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBClusterParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionCreateDBClusterParameterGroupQueryKey>
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
      ...getActionCreateDBClusterParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBClusterParameterGroup<
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
                  ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionCreateDBClusterParameterGroupMutationOptions<
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

export function getActionCreateDBClusterSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBClusterSnapshot', '/#Action=CreateDBClusterSnapshot', keyArgs] as const
}

export function getActionCreateDBClusterSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBClusterSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBClusterSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBClusterSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBClusterSnapshot<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>,
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
    const mutationDefaults = getPostActionCreateDBClusterSnapshotMutationOptions<
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

export function getActionCreateDBInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBInstance', '/#Action=CreateDBInstance', keyArgs] as const
}

export function getActionCreateDBInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCreateDBInstanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCreateDBInstanceReadReplicaQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateDBInstanceReadReplica',
    '/#Action=CreateDBInstanceReadReplica',
    keyArgs,
  ] as const
}

export function getActionCreateDBInstanceReadReplicaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBInstanceReadReplicaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBInstanceReadReplica'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBInstanceReadReplica<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBInstanceReadReplicaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBInstanceReadReplica<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>,
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
    const mutationDefaults = getPostActionCreateDBInstanceReadReplicaMutationOptions<
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

export function getActionCreateDBParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBParameterGroup', '/#Action=CreateDBParameterGroup', keyArgs] as const
}

export function getActionCreateDBParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionCreateDBParameterGroupMutationOptions<
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

export function getActionCreateDBProxyQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBProxy', '/#Action=CreateDBProxy', keyArgs] as const
}

export function getActionCreateDBProxyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDBProxyQueryKey>
  >({
    queryKey: getActionCreateDBProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBProxy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionCreateDBProxyQueryKey>
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
    return { ...getActionCreateDBProxyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostActionCreateDBProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCreateDBProxyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCreateDBProxyEndpointQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBProxyEndpoint', '/#Action=CreateDBProxyEndpoint', keyArgs] as const
}

export function getActionCreateDBProxyEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBProxyEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBProxyEndpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBProxyEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBProxyEndpointQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBProxyEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>,
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
    const mutationDefaults = getPostActionCreateDBProxyEndpointMutationOptions<
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

export function getActionCreateDBSecurityGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBSecurityGroup', '/#Action=CreateDBSecurityGroup', keyArgs] as const
}

export function getActionCreateDBSecurityGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBSecurityGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBSecurityGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBSecurityGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBSecurityGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>,
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
    const mutationDefaults = getPostActionCreateDBSecurityGroupMutationOptions<
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

export function getActionCreateDBSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBSnapshot', '/#Action=CreateDBSnapshot', keyArgs] as const
}

export function getActionCreateDBSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCreateDBSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCreateDBSubnetGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBSubnetGroup', '/#Action=CreateDBSubnetGroup', keyArgs] as const
}

export function getActionCreateDBSubnetGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateDBSubnetGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDBSubnetGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDBSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateDBSubnetGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateDBSubnetGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>,
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
    const mutationDefaults = getPostActionCreateDBSubnetGroupMutationOptions<
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

export function getActionCreateEventSubscriptionQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', keyArgs] as const
}

export function getActionCreateEventSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateEventSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateEventSubscription'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateEventSubscriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateEventSubscription<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
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
    const mutationDefaults = getPostActionCreateEventSubscriptionMutationOptions<
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

export function getActionCreateGlobalClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateGlobalCluster', '/#Action=CreateGlobalCluster', keyArgs] as const
}

export function getActionCreateGlobalClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateGlobalClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateGlobalCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateGlobalClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateGlobalCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$post']>,
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
    const mutationDefaults = getPostActionCreateGlobalClusterMutationOptions<
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

export function getActionCreateOptionGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateOptionGroup', '/#Action=CreateOptionGroup', keyArgs] as const
}

export function getActionCreateOptionGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionCreateOptionGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateOptionGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateOptionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionCreateOptionGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionCreateOptionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionCreateOptionGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteBlueGreenDeploymentQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteBlueGreenDeployment',
    '/#Action=DeleteBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function getActionDeleteBlueGreenDeploymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteBlueGreenDeploymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteBlueGreenDeployment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteBlueGreenDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteBlueGreenDeploymentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteBlueGreenDeployment<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>,
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
    const mutationDefaults = getPostActionDeleteBlueGreenDeploymentMutationOptions<
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

export function getActionDeleteCustomDBEngineVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteCustomDBEngineVersion',
    '/#Action=DeleteCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function getActionDeleteCustomDBEngineVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteCustomDBEngineVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteCustomDBEngineVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteCustomDBEngineVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteCustomDBEngineVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteCustomDBEngineVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>,
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
    const mutationDefaults = getPostActionDeleteCustomDBEngineVersionMutationOptions<
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

export function getActionDeleteDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBCluster', '/#Action=DeleteDBCluster', keyArgs] as const
}

export function getActionDeleteDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDeleteDBClusterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteDBClusterAutomatedBackupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteDBClusterAutomatedBackup',
    '/#Action=DeleteDBClusterAutomatedBackup',
    keyArgs,
  ] as const
}

export function getActionDeleteDBClusterAutomatedBackupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBClusterAutomatedBackupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBClusterAutomatedBackup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBClusterAutomatedBackup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDeleteDBClusterAutomatedBackupQueryKey>
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
      ...getActionDeleteDBClusterAutomatedBackupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBClusterAutomatedBackup<
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
                  ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBClusterAutomatedBackupMutationOptions<
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

export function getActionDeleteDBClusterEndpointQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBClusterEndpoint', '/#Action=DeleteDBClusterEndpoint', keyArgs] as const
}

export function getActionDeleteDBClusterEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBClusterEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBClusterEndpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBClusterEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBClusterEndpointQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBClusterEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBClusterEndpointMutationOptions<
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

export function getActionDeleteDBClusterParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteDBClusterParameterGroup',
    '/#Action=DeleteDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionDeleteDBClusterParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBClusterParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBClusterParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDeleteDBClusterParameterGroupQueryKey>
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
      ...getActionDeleteDBClusterParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBClusterParameterGroup<
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
                  ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBClusterParameterGroupMutationOptions<
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

export function getActionDeleteDBClusterSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBClusterSnapshot', '/#Action=DeleteDBClusterSnapshot', keyArgs] as const
}

export function getActionDeleteDBClusterSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBClusterSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBClusterSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBClusterSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBClusterSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBClusterSnapshot<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBClusterSnapshotMutationOptions<
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

export function getActionDeleteDBInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBInstance', '/#Action=DeleteDBInstance', keyArgs] as const
}

export function getActionDeleteDBInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDeleteDBInstanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteDBInstanceAutomatedBackupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteDBInstanceAutomatedBackup',
    '/#Action=DeleteDBInstanceAutomatedBackup',
    keyArgs,
  ] as const
}

export function getActionDeleteDBInstanceAutomatedBackupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBInstanceAutomatedBackupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBInstanceAutomatedBackup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBInstanceAutomatedBackup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDeleteDBInstanceAutomatedBackupQueryKey>
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
      ...getActionDeleteDBInstanceAutomatedBackupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBInstanceAutomatedBackup<
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
                  ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBInstanceAutomatedBackupMutationOptions<
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

export function getActionDeleteDBParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBParameterGroup', '/#Action=DeleteDBParameterGroup', keyArgs] as const
}

export function getActionDeleteDBParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBParameterGroupMutationOptions<
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

export function getActionDeleteDBProxyQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBProxy', '/#Action=DeleteDBProxy', keyArgs] as const
}

export function getActionDeleteDBProxyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDBProxyQueryKey>
  >({
    queryKey: getActionDeleteDBProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBProxy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDeleteDBProxyQueryKey>
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
    return { ...getActionDeleteDBProxyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostActionDeleteDBProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDeleteDBProxyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteDBProxyEndpointQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBProxyEndpoint', '/#Action=DeleteDBProxyEndpoint', keyArgs] as const
}

export function getActionDeleteDBProxyEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBProxyEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBProxyEndpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBProxyEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBProxyEndpointQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBProxyEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBProxyEndpointMutationOptions<
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

export function getActionDeleteDBSecurityGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBSecurityGroup', '/#Action=DeleteDBSecurityGroup', keyArgs] as const
}

export function getActionDeleteDBSecurityGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBSecurityGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBSecurityGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBSecurityGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBSecurityGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBSecurityGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBSecurityGroupMutationOptions<
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

export function getActionDeleteDBSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBSnapshot', '/#Action=DeleteDBSnapshot', keyArgs] as const
}

export function getActionDeleteDBSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDeleteDBSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteDBSubnetGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBSubnetGroup', '/#Action=DeleteDBSubnetGroup', keyArgs] as const
}

export function getActionDeleteDBSubnetGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteDBSubnetGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDBSubnetGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDBSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteDBSubnetGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteDBSubnetGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>,
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
    const mutationDefaults = getPostActionDeleteDBSubnetGroupMutationOptions<
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

export function getActionDeleteEventSubscriptionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', keyArgs] as const
}

export function getActionDeleteEventSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteEventSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteEventSubscription'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteEventSubscriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteEventSubscription<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
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
    const mutationDefaults = getPostActionDeleteEventSubscriptionMutationOptions<
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

export function getActionDeleteGlobalClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteGlobalCluster', '/#Action=DeleteGlobalCluster', keyArgs] as const
}

export function getActionDeleteGlobalClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteGlobalClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteGlobalCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteGlobalClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteGlobalCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>,
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
    const mutationDefaults = getPostActionDeleteGlobalClusterMutationOptions<
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

export function getActionDeleteOptionGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteOptionGroup', '/#Action=DeleteOptionGroup', keyArgs] as const
}

export function getActionDeleteOptionGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeleteOptionGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteOptionGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteOptionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeleteOptionGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeleteOptionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDeleteOptionGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeregisterDBProxyTargetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeregisterDBProxyTargets', '/#Action=DeregisterDBProxyTargets', keyArgs] as const
}

export function getActionDeregisterDBProxyTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDeregisterDBProxyTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeregisterDBProxyTargets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeregisterDBProxyTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDeregisterDBProxyTargetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDeregisterDBProxyTargets<
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
                Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>,
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
    const mutationDefaults = getPostActionDeregisterDBProxyTargetsMutationOptions<
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

export function getActionDescribeAccountAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeAccountAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeAccountAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAccountAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeAccountAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeAccountAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeAccountAttributes<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
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
    const mutationDefaults = getPostActionDescribeAccountAttributesMutationOptions<
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

export function getActionDescribeBlueGreenDeploymentsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeBlueGreenDeployments',
    '/#Action=DescribeBlueGreenDeployments',
    keyArgs,
  ] as const
}

export function getActionDescribeBlueGreenDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeBlueGreenDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeBlueGreenDeployments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeBlueGreenDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeBlueGreenDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeBlueGreenDeployments<
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
                  ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>,
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
    const mutationDefaults = getPostActionDescribeBlueGreenDeploymentsMutationOptions<
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

export function getActionDescribeCertificatesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeCertificates', '/#Action=DescribeCertificates', keyArgs] as const
}

export function getActionDescribeCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeCertificates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeCertificatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeCertificates<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeCertificates']['$post']>,
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
    const mutationDefaults = getPostActionDescribeCertificatesMutationOptions<
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

export function getActionDescribeDBClusterAutomatedBackupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterAutomatedBackups',
    '/#Action=DescribeDBClusterAutomatedBackups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterAutomatedBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBClusterAutomatedBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBClusterAutomatedBackups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBClusterAutomatedBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDescribeDBClusterAutomatedBackupsQueryKey>
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
      ...getActionDescribeDBClusterAutomatedBackupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBClusterAutomatedBackups<
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
                  ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBClusterAutomatedBackupsMutationOptions<
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

export function getActionDescribeDBClusterBacktracksQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterBacktracks',
    '/#Action=DescribeDBClusterBacktracks',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterBacktracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBClusterBacktracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBClusterBacktracks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBClusterBacktracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBClusterBacktracksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBClusterBacktracks<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBClusterBacktracksMutationOptions<
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

export function getActionDescribeDBClusterEndpointsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterEndpoints',
    '/#Action=DescribeDBClusterEndpoints',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBClusterEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBClusterEndpoints'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBClusterEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBClusterEndpointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBClusterEndpoints<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBClusterEndpointsMutationOptions<
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

export function getActionDescribeDBClusterParameterGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterParameterGroups',
    '/#Action=DescribeDBClusterParameterGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterParameterGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBClusterParameterGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBClusterParameterGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBClusterParameterGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDescribeDBClusterParameterGroupsQueryKey>
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
      ...getActionDescribeDBClusterParameterGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBClusterParameterGroups<
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
                  ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBClusterParameterGroupsMutationOptions<
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

export function getActionDescribeDBClusterParametersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterParameters',
    '/#Action=DescribeDBClusterParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBClusterParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBClusterParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBClusterParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBClusterParametersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBClusterParameters<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBClusterParametersMutationOptions<
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

export function getActionDescribeDBClusterSnapshotAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterSnapshotAttributes',
    '/#Action=DescribeDBClusterSnapshotAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterSnapshotAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBClusterSnapshotAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBClusterSnapshotAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBClusterSnapshotAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBClusterSnapshotAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBClusterSnapshotAttributes<
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
                    (typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBClusterSnapshotAttributesMutationOptions<
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

export function getActionDescribeDBClusterSnapshotsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterSnapshots',
    '/#Action=DescribeDBClusterSnapshots',
    keyArgs,
  ] as const
}

export function getActionDescribeDBClusterSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBClusterSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBClusterSnapshots'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBClusterSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBClusterSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBClusterSnapshots<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBClusterSnapshotsMutationOptions<
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

export function getActionDescribeDBClustersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBClusters', '/#Action=DescribeDBClusters', keyArgs] as const
}

export function getActionDescribeDBClustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBClusters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBClustersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBClusters<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBClustersMutationOptions<
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

export function getActionDescribeDBEngineVersionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBEngineVersions', '/#Action=DescribeDBEngineVersions', keyArgs] as const
}

export function getActionDescribeDBEngineVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBEngineVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBEngineVersions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBEngineVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBEngineVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBEngineVersions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBEngineVersionsMutationOptions<
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

export function getActionDescribeDBInstanceAutomatedBackupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBInstanceAutomatedBackups',
    '/#Action=DescribeDBInstanceAutomatedBackups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBInstanceAutomatedBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBInstanceAutomatedBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBInstanceAutomatedBackups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBInstanceAutomatedBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDescribeDBInstanceAutomatedBackupsQueryKey>
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
      ...getActionDescribeDBInstanceAutomatedBackupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBInstanceAutomatedBackups<
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
                  ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBInstanceAutomatedBackupsMutationOptions<
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

export function getActionDescribeDBInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBInstances', '/#Action=DescribeDBInstances', keyArgs] as const
}

export function getActionDescribeDBInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBInstances<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBInstancesMutationOptions<
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

export function getActionDescribeDBLogFilesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBLogFiles', '/#Action=DescribeDBLogFiles', keyArgs] as const
}

export function getActionDescribeDBLogFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBLogFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBLogFiles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBLogFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBLogFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBLogFiles<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBLogFilesMutationOptions<
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

export function getActionDescribeDBParameterGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBParameterGroups',
    '/#Action=DescribeDBParameterGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBParameterGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBParameterGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBParameterGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBParameterGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBParameterGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBParameterGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBParameterGroupsMutationOptions<
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

export function getActionDescribeDBParametersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBParameters', '/#Action=DescribeDBParameters', keyArgs] as const
}

export function getActionDescribeDBParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBParametersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBParameters<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBParametersMutationOptions<
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

export function getActionDescribeDBProxiesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBProxies', '/#Action=DescribeDBProxies', keyArgs] as const
}

export function getActionDescribeDBProxiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBProxiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBProxies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBProxies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBProxiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBProxies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDescribeDBProxiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDescribeDBProxyEndpointsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBProxyEndpoints', '/#Action=DescribeDBProxyEndpoints', keyArgs] as const
}

export function getActionDescribeDBProxyEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBProxyEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBProxyEndpoints'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBProxyEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBProxyEndpointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBProxyEndpoints<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBProxyEndpointsMutationOptions<
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

export function getActionDescribeDBProxyTargetGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBProxyTargetGroups',
    '/#Action=DescribeDBProxyTargetGroups',
    keyArgs,
  ] as const
}

export function getActionDescribeDBProxyTargetGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBProxyTargetGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBProxyTargetGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBProxyTargetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBProxyTargetGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBProxyTargetGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBProxyTargetGroupsMutationOptions<
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

export function getActionDescribeDBProxyTargetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBProxyTargets', '/#Action=DescribeDBProxyTargets', keyArgs] as const
}

export function getActionDescribeDBProxyTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBProxyTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBProxyTargets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBProxyTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBProxyTargetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBProxyTargets<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBProxyTargetsMutationOptions<
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

export function getActionDescribeDBSecurityGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBSecurityGroups', '/#Action=DescribeDBSecurityGroups', keyArgs] as const
}

export function getActionDescribeDBSecurityGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBSecurityGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBSecurityGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBSecurityGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBSecurityGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBSecurityGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBSecurityGroupsMutationOptions<
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

export function getActionDescribeDBSnapshotAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBSnapshotAttributes',
    '/#Action=DescribeDBSnapshotAttributes',
    keyArgs,
  ] as const
}

export function getActionDescribeDBSnapshotAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBSnapshotAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBSnapshotAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBSnapshotAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBSnapshotAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBSnapshotAttributes<
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
                  ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBSnapshotAttributesMutationOptions<
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

export function getActionDescribeDBSnapshotsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBSnapshots', '/#Action=DescribeDBSnapshots', keyArgs] as const
}

export function getActionDescribeDBSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBSnapshots'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBSnapshots<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBSnapshotsMutationOptions<
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

export function getActionDescribeDBSubnetGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBSubnetGroups', '/#Action=DescribeDBSubnetGroups', keyArgs] as const
}

export function getActionDescribeDBSubnetGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeDBSubnetGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDBSubnetGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDBSubnetGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeDBSubnetGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeDBSubnetGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>,
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
    const mutationDefaults = getPostActionDescribeDBSubnetGroupsMutationOptions<
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

export function getActionDescribeEngineDefaultClusterParametersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEngineDefaultClusterParameters',
    '/#Action=DescribeEngineDefaultClusterParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeEngineDefaultClusterParametersQueryOptions<
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
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeEngineDefaultClusterParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEngineDefaultClusterParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEngineDefaultClusterParameters<
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
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']
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
                    (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeEngineDefaultClusterParametersQueryKey>
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
      ...getActionDescribeEngineDefaultClusterParametersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEngineDefaultClusterParameters<
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
    const mutationDefaults = getPostActionDescribeEngineDefaultClusterParametersMutationOptions<
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

export function createActionDescribeEngineDefaultParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeEngineDefaultParametersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEngineDefaultParameters<
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
                  ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>,
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
    const mutationDefaults = getPostActionDescribeEngineDefaultParametersMutationOptions<
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

export function getActionDescribeEventCategoriesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', keyArgs] as const
}

export function getActionDescribeEventCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeEventCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEventCategories'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEventCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeEventCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEventCategories<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
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
    const mutationDefaults = getPostActionDescribeEventCategoriesMutationOptions<
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

export function getActionDescribeEventSubscriptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    keyArgs,
  ] as const
}

export function getActionDescribeEventSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeEventSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeEventSubscriptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeEventSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeEventSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEventSubscriptions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
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
    const mutationDefaults = getPostActionDescribeEventSubscriptionsMutationOptions<
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

export function createActionDescribeEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionDescribeEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDescribeExportTasksQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeExportTasks', '/#Action=DescribeExportTasks', keyArgs] as const
}

export function getActionDescribeExportTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeExportTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeExportTasks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeExportTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeExportTasksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeExportTasks<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$post']>,
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
    const mutationDefaults = getPostActionDescribeExportTasksMutationOptions<
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

export function getActionDescribeGlobalClustersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeGlobalClusters', '/#Action=DescribeGlobalClusters', keyArgs] as const
}

export function getActionDescribeGlobalClustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeGlobalClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeGlobalClusters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeGlobalClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeGlobalClustersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeGlobalClusters<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>,
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
    const mutationDefaults = getPostActionDescribeGlobalClustersMutationOptions<
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

export function getActionDescribeOptionGroupOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeOptionGroupOptions',
    '/#Action=DescribeOptionGroupOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeOptionGroupOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeOptionGroupOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeOptionGroupOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeOptionGroupOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeOptionGroupOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeOptionGroupOptions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>,
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
    const mutationDefaults = getPostActionDescribeOptionGroupOptionsMutationOptions<
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

export function getActionDescribeOptionGroupsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeOptionGroups', '/#Action=DescribeOptionGroups', keyArgs] as const
}

export function getActionDescribeOptionGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeOptionGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeOptionGroups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeOptionGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeOptionGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeOptionGroups<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$post']>,
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
    const mutationDefaults = getPostActionDescribeOptionGroupsMutationOptions<
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

export function getActionDescribeOrderableDBInstanceOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeOrderableDBInstanceOptions',
    '/#Action=DescribeOrderableDBInstanceOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeOrderableDBInstanceOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeOrderableDBInstanceOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeOrderableDBInstanceOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeOrderableDBInstanceOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDescribeOrderableDBInstanceOptionsQueryKey>
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
      ...getActionDescribeOrderableDBInstanceOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeOrderableDBInstanceOptions<
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
                  ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']>,
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
    const mutationDefaults = getPostActionDescribeOrderableDBInstanceOptionsMutationOptions<
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

export function getActionDescribePendingMaintenanceActionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribePendingMaintenanceActions',
    '/#Action=DescribePendingMaintenanceActions',
    keyArgs,
  ] as const
}

export function getActionDescribePendingMaintenanceActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribePendingMaintenanceActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribePendingMaintenanceActions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribePendingMaintenanceActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribePendingMaintenanceActions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionDescribePendingMaintenanceActionsQueryKey>
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
      ...getActionDescribePendingMaintenanceActionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribePendingMaintenanceActions<
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
                  ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>,
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
    const mutationDefaults = getPostActionDescribePendingMaintenanceActionsMutationOptions<
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

export function getActionDescribeReservedDBInstancesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReservedDBInstances',
    '/#Action=DescribeReservedDBInstances',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedDBInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeReservedDBInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeReservedDBInstances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeReservedDBInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeReservedDBInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeReservedDBInstances<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>,
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
    const mutationDefaults = getPostActionDescribeReservedDBInstancesMutationOptions<
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

export function getActionDescribeReservedDBInstancesOfferingsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReservedDBInstancesOfferings',
    '/#Action=DescribeReservedDBInstancesOfferings',
    keyArgs,
  ] as const
}

export function getActionDescribeReservedDBInstancesOfferingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeReservedDBInstancesOfferingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeReservedDBInstancesOfferings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeReservedDBInstancesOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']
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
                    (typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeReservedDBInstancesOfferingsQueryKey>
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
      ...getActionDescribeReservedDBInstancesOfferingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeReservedDBInstancesOfferings<
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
    const mutationDefaults = getPostActionDescribeReservedDBInstancesOfferingsMutationOptions<
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

export function getActionDescribeSourceRegionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeSourceRegions', '/#Action=DescribeSourceRegions', keyArgs] as const
}

export function getActionDescribeSourceRegionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeSourceRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeSourceRegions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeSourceRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDescribeSourceRegionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeSourceRegions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$post']>,
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
    const mutationDefaults = getPostActionDescribeSourceRegionsMutationOptions<
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

export function getActionDescribeValidDBInstanceModificationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeValidDBInstanceModifications',
    '/#Action=DescribeValidDBInstanceModifications',
    keyArgs,
  ] as const
}

export function getActionDescribeValidDBInstanceModificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDescribeValidDBInstanceModificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeValidDBInstanceModifications'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeValidDBInstanceModifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']
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
                    (typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionDescribeValidDBInstanceModificationsQueryKey>
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
      ...getActionDescribeValidDBInstanceModificationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDescribeValidDBInstanceModifications<
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
    const mutationDefaults = getPostActionDescribeValidDBInstanceModificationsMutationOptions<
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

export function getActionDownloadDBLogFilePortionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DownloadDBLogFilePortion', '/#Action=DownloadDBLogFilePortion', keyArgs] as const
}

export function getActionDownloadDBLogFilePortionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionDownloadDBLogFilePortionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DownloadDBLogFilePortion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDownloadDBLogFilePortion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionDownloadDBLogFilePortionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionDownloadDBLogFilePortion<
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
                Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>,
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
    const mutationDefaults = getPostActionDownloadDBLogFilePortionMutationOptions<
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

export function getActionFailoverDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=FailoverDBCluster', '/#Action=FailoverDBCluster', keyArgs] as const
}

export function getActionFailoverDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionFailoverDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=FailoverDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionFailoverDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionFailoverDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionFailoverDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionFailoverDBClusterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionFailoverGlobalClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=FailoverGlobalCluster', '/#Action=FailoverGlobalCluster', keyArgs] as const
}

export function getActionFailoverGlobalClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionFailoverGlobalClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=FailoverGlobalCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionFailoverGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionFailoverGlobalClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionFailoverGlobalCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>,
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
    const mutationDefaults = getPostActionFailoverGlobalClusterMutationOptions<
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

export function createActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionListTagsForResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionListTagsForResource<
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
                Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
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
    const mutationDefaults = getPostActionListTagsForResourceMutationOptions<
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

export function getActionModifyActivityStreamQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyActivityStream', '/#Action=ModifyActivityStream', keyArgs] as const
}

export function getActionModifyActivityStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyActivityStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyActivityStream'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyActivityStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyActivityStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyActivityStream<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$post']>,
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
    const mutationDefaults = getPostActionModifyActivityStreamMutationOptions<
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

export function getActionModifyCertificatesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyCertificates', '/#Action=ModifyCertificates', keyArgs] as const
}

export function getActionModifyCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyCertificates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyCertificatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyCertificates<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyCertificates']['$post']>,
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
    const mutationDefaults = getPostActionModifyCertificatesMutationOptions<
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

export function getActionModifyCurrentDBClusterCapacityQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyCurrentDBClusterCapacity',
    '/#Action=ModifyCurrentDBClusterCapacity',
    keyArgs,
  ] as const
}

export function getActionModifyCurrentDBClusterCapacityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyCurrentDBClusterCapacityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyCurrentDBClusterCapacity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyCurrentDBClusterCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionModifyCurrentDBClusterCapacityQueryKey>
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
      ...getActionModifyCurrentDBClusterCapacityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyCurrentDBClusterCapacity<
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
                  ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>,
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
    const mutationDefaults = getPostActionModifyCurrentDBClusterCapacityMutationOptions<
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

export function getActionModifyCustomDBEngineVersionQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyCustomDBEngineVersion',
    '/#Action=ModifyCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function getActionModifyCustomDBEngineVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyCustomDBEngineVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyCustomDBEngineVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyCustomDBEngineVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyCustomDBEngineVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyCustomDBEngineVersion<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>,
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
    const mutationDefaults = getPostActionModifyCustomDBEngineVersionMutationOptions<
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

export function getActionModifyDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBCluster', '/#Action=ModifyDBCluster', keyArgs] as const
}

export function getActionModifyDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionModifyDBClusterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionModifyDBClusterEndpointQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBClusterEndpoint', '/#Action=ModifyDBClusterEndpoint', keyArgs] as const
}

export function getActionModifyDBClusterEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBClusterEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBClusterEndpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBClusterEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBClusterEndpointQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBClusterEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>,
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
    const mutationDefaults = getPostActionModifyDBClusterEndpointMutationOptions<
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

export function getActionModifyDBClusterParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyDBClusterParameterGroup',
    '/#Action=ModifyDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionModifyDBClusterParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBClusterParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBClusterParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionModifyDBClusterParameterGroupQueryKey>
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
      ...getActionModifyDBClusterParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBClusterParameterGroup<
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
                  ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionModifyDBClusterParameterGroupMutationOptions<
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

export function getActionModifyDBClusterSnapshotAttributeQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyDBClusterSnapshotAttribute',
    '/#Action=ModifyDBClusterSnapshotAttribute',
    keyArgs,
  ] as const
}

export function getActionModifyDBClusterSnapshotAttributeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBClusterSnapshotAttributeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBClusterSnapshotAttribute'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBClusterSnapshotAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionModifyDBClusterSnapshotAttributeQueryKey>
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
      ...getActionModifyDBClusterSnapshotAttributeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBClusterSnapshotAttribute<
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
                  ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>,
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
    const mutationDefaults = getPostActionModifyDBClusterSnapshotAttributeMutationOptions<
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

export function getActionModifyDBInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBInstance', '/#Action=ModifyDBInstance', keyArgs] as const
}

export function getActionModifyDBInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionModifyDBInstanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionModifyDBParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBParameterGroup', '/#Action=ModifyDBParameterGroup', keyArgs] as const
}

export function getActionModifyDBParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionModifyDBParameterGroupMutationOptions<
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

export function getActionModifyDBProxyQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBProxy', '/#Action=ModifyDBProxy', keyArgs] as const
}

export function getActionModifyDBProxyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionModifyDBProxyQueryKey>
  >({
    queryKey: getActionModifyDBProxyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBProxy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBProxy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionModifyDBProxyQueryKey>
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
    return { ...getActionModifyDBProxyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostActionModifyDBProxy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionModifyDBProxyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionModifyDBProxyEndpointQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBProxyEndpoint', '/#Action=ModifyDBProxyEndpoint', keyArgs] as const
}

export function getActionModifyDBProxyEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBProxyEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBProxyEndpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBProxyEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBProxyEndpointQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBProxyEndpoint<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>,
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
    const mutationDefaults = getPostActionModifyDBProxyEndpointMutationOptions<
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

export function getActionModifyDBProxyTargetGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBProxyTargetGroup', '/#Action=ModifyDBProxyTargetGroup', keyArgs] as const
}

export function getActionModifyDBProxyTargetGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBProxyTargetGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBProxyTargetGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBProxyTargetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBProxyTargetGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBProxyTargetGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>,
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
    const mutationDefaults = getPostActionModifyDBProxyTargetGroupMutationOptions<
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

export function getActionModifyDBSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBSnapshot', '/#Action=ModifyDBSnapshot', keyArgs] as const
}

export function getActionModifyDBSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionModifyDBSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionModifyDBSnapshotAttributeQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyDBSnapshotAttribute',
    '/#Action=ModifyDBSnapshotAttribute',
    keyArgs,
  ] as const
}

export function getActionModifyDBSnapshotAttributeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBSnapshotAttributeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBSnapshotAttribute'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBSnapshotAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBSnapshotAttributeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBSnapshotAttribute<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>,
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
    const mutationDefaults = getPostActionModifyDBSnapshotAttributeMutationOptions<
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

export function getActionModifyDBSubnetGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBSubnetGroup', '/#Action=ModifyDBSubnetGroup', keyArgs] as const
}

export function getActionModifyDBSubnetGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyDBSubnetGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyDBSubnetGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyDBSubnetGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyDBSubnetGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyDBSubnetGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>,
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
    const mutationDefaults = getPostActionModifyDBSubnetGroupMutationOptions<
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

export function getActionModifyEventSubscriptionQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', keyArgs] as const
}

export function getActionModifyEventSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyEventSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyEventSubscription'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyEventSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyEventSubscriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyEventSubscription<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
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
    const mutationDefaults = getPostActionModifyEventSubscriptionMutationOptions<
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

export function getActionModifyGlobalClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyGlobalCluster', '/#Action=ModifyGlobalCluster', keyArgs] as const
}

export function getActionModifyGlobalClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyGlobalClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyGlobalCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyGlobalClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyGlobalCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>,
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
    const mutationDefaults = getPostActionModifyGlobalClusterMutationOptions<
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

export function getActionModifyOptionGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyOptionGroup', '/#Action=ModifyOptionGroup', keyArgs] as const
}

export function getActionModifyOptionGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionModifyOptionGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ModifyOptionGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionModifyOptionGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionModifyOptionGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionModifyOptionGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionModifyOptionGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionPromoteReadReplicaQueryKey(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PromoteReadReplica', '/#Action=PromoteReadReplica', keyArgs] as const
}

export function getActionPromoteReadReplicaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionPromoteReadReplicaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PromoteReadReplica'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionPromoteReadReplica<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionPromoteReadReplicaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionPromoteReadReplica<
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
                Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$post']>,
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
    const mutationDefaults = getPostActionPromoteReadReplicaMutationOptions<
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

export function getActionPromoteReadReplicaDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PromoteReadReplicaDBCluster',
    '/#Action=PromoteReadReplicaDBCluster',
    keyArgs,
  ] as const
}

export function getActionPromoteReadReplicaDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionPromoteReadReplicaDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PromoteReadReplicaDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionPromoteReadReplicaDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionPromoteReadReplicaDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionPromoteReadReplicaDBCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>,
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
    const mutationDefaults = getPostActionPromoteReadReplicaDBClusterMutationOptions<
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

export function getActionPurchaseReservedDBInstancesOfferingQueryKey(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PurchaseReservedDBInstancesOffering',
    '/#Action=PurchaseReservedDBInstancesOffering',
    keyArgs,
  ] as const
}

export function getActionPurchaseReservedDBInstancesOfferingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionPurchaseReservedDBInstancesOfferingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PurchaseReservedDBInstancesOffering'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionPurchaseReservedDBInstancesOffering<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionPurchaseReservedDBInstancesOfferingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionPurchaseReservedDBInstancesOffering<
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
                    (typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']>,
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
    const mutationDefaults = getPostActionPurchaseReservedDBInstancesOfferingMutationOptions<
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

export function getActionRebootDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RebootDBCluster', '/#Action=RebootDBCluster', keyArgs] as const
}

export function getActionRebootDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRebootDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RebootDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRebootDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRebootDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRebootDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionRebootDBClusterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionRebootDBInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RebootDBInstance', '/#Action=RebootDBInstance', keyArgs] as const
}

export function getActionRebootDBInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRebootDBInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RebootDBInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRebootDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRebootDBInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRebootDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionRebootDBInstanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionRegisterDBProxyTargetsQueryKey(
  args: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RegisterDBProxyTargets', '/#Action=RegisterDBProxyTargets', keyArgs] as const
}

export function getActionRegisterDBProxyTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRegisterDBProxyTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RegisterDBProxyTargets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRegisterDBProxyTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRegisterDBProxyTargetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRegisterDBProxyTargets<
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
                Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>,
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
    const mutationDefaults = getPostActionRegisterDBProxyTargetsMutationOptions<
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

export function getActionRemoveFromGlobalClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveFromGlobalCluster', '/#Action=RemoveFromGlobalCluster', keyArgs] as const
}

export function getActionRemoveFromGlobalClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRemoveFromGlobalClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RemoveFromGlobalCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRemoveFromGlobalCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRemoveFromGlobalClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRemoveFromGlobalCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>,
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
    const mutationDefaults = getPostActionRemoveFromGlobalClusterMutationOptions<
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

export function getActionRemoveRoleFromDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveRoleFromDBCluster', '/#Action=RemoveRoleFromDBCluster', keyArgs] as const
}

export function getActionRemoveRoleFromDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRemoveRoleFromDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RemoveRoleFromDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRemoveRoleFromDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRemoveRoleFromDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRemoveRoleFromDBCluster<
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
                Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>,
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
    const mutationDefaults = getPostActionRemoveRoleFromDBClusterMutationOptions<
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

export function getActionRemoveRoleFromDBInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveRoleFromDBInstance', '/#Action=RemoveRoleFromDBInstance', keyArgs] as const
}

export function getActionRemoveRoleFromDBInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRemoveRoleFromDBInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RemoveRoleFromDBInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRemoveRoleFromDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRemoveRoleFromDBInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRemoveRoleFromDBInstance<
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
                Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>,
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
    const mutationDefaults = getPostActionRemoveRoleFromDBInstanceMutationOptions<
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

export function getActionRemoveSourceIdentifierFromSubscriptionQueryKey(
  args: InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RemoveSourceIdentifierFromSubscription',
    '/#Action=RemoveSourceIdentifierFromSubscription',
    keyArgs,
  ] as const
}

export function getActionRemoveSourceIdentifierFromSubscriptionQueryOptions<
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
  args: InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRemoveSourceIdentifierFromSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RemoveSourceIdentifierFromSubscription'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRemoveSourceIdentifierFromSubscription<
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
  args: () => InferRequestType<
    (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']
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
                    (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionRemoveSourceIdentifierFromSubscriptionQueryKey>
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
      ...getActionRemoveSourceIdentifierFromSubscriptionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRemoveSourceIdentifierFromSubscription<
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
    const mutationDefaults = getPostActionRemoveSourceIdentifierFromSubscriptionMutationOptions<
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

export function createActionRemoveTagsFromResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRemoveTagsFromResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRemoveTagsFromResource<
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
                Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>,
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
    const mutationDefaults = getPostActionRemoveTagsFromResourceMutationOptions<
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

export function getActionResetDBClusterParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ResetDBClusterParameterGroup',
    '/#Action=ResetDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function getActionResetDBClusterParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionResetDBClusterParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ResetDBClusterParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionResetDBClusterParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionResetDBClusterParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionResetDBClusterParameterGroup<
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
                  ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionResetDBClusterParameterGroupMutationOptions<
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

export function getActionResetDBParameterGroupQueryKey(
  args: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ResetDBParameterGroup', '/#Action=ResetDBParameterGroup', keyArgs] as const
}

export function getActionResetDBParameterGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionResetDBParameterGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ResetDBParameterGroup'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionResetDBParameterGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionResetDBParameterGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionResetDBParameterGroup<
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
                Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>,
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
    const mutationDefaults = getPostActionResetDBParameterGroupMutationOptions<
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

export function getActionRestoreDBClusterFromS3QueryKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RestoreDBClusterFromS3', '/#Action=RestoreDBClusterFromS3', keyArgs] as const
}

export function getActionRestoreDBClusterFromS3QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRestoreDBClusterFromS3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RestoreDBClusterFromS3'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRestoreDBClusterFromS3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRestoreDBClusterFromS3QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRestoreDBClusterFromS3<
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
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>,
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
    const mutationDefaults = getPostActionRestoreDBClusterFromS3MutationOptions<
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

export function getActionRestoreDBClusterFromSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreDBClusterFromSnapshot',
    '/#Action=RestoreDBClusterFromSnapshot',
    keyArgs,
  ] as const
}

export function getActionRestoreDBClusterFromSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRestoreDBClusterFromSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RestoreDBClusterFromSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRestoreDBClusterFromSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRestoreDBClusterFromSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRestoreDBClusterFromSnapshot<
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
                  ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>,
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
    const mutationDefaults = getPostActionRestoreDBClusterFromSnapshotMutationOptions<
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

export function getActionRestoreDBClusterToPointInTimeQueryKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreDBClusterToPointInTime',
    '/#Action=RestoreDBClusterToPointInTime',
    keyArgs,
  ] as const
}

export function getActionRestoreDBClusterToPointInTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRestoreDBClusterToPointInTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RestoreDBClusterToPointInTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRestoreDBClusterToPointInTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionRestoreDBClusterToPointInTimeQueryKey>
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
      ...getActionRestoreDBClusterToPointInTimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRestoreDBClusterToPointInTime<
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
                  ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>,
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
    const mutationDefaults = getPostActionRestoreDBClusterToPointInTimeMutationOptions<
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

export function getActionRestoreDBInstanceFromDBSnapshotQueryKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreDBInstanceFromDBSnapshot',
    '/#Action=RestoreDBInstanceFromDBSnapshot',
    keyArgs,
  ] as const
}

export function getActionRestoreDBInstanceFromDBSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRestoreDBInstanceFromDBSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RestoreDBInstanceFromDBSnapshot'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRestoreDBInstanceFromDBSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionRestoreDBInstanceFromDBSnapshotQueryKey>
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
      ...getActionRestoreDBInstanceFromDBSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRestoreDBInstanceFromDBSnapshot<
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
                  ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>,
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
    const mutationDefaults = getPostActionRestoreDBInstanceFromDBSnapshotMutationOptions<
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

export function getActionRestoreDBInstanceFromS3QueryKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RestoreDBInstanceFromS3', '/#Action=RestoreDBInstanceFromS3', keyArgs] as const
}

export function getActionRestoreDBInstanceFromS3QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRestoreDBInstanceFromS3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RestoreDBInstanceFromS3'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRestoreDBInstanceFromS3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRestoreDBInstanceFromS3QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRestoreDBInstanceFromS3<
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
                Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>,
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
    const mutationDefaults = getPostActionRestoreDBInstanceFromS3MutationOptions<
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

export function getActionRestoreDBInstanceToPointInTimeQueryKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreDBInstanceToPointInTime',
    '/#Action=RestoreDBInstanceToPointInTime',
    keyArgs,
  ] as const
}

export function getActionRestoreDBInstanceToPointInTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRestoreDBInstanceToPointInTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RestoreDBInstanceToPointInTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRestoreDBInstanceToPointInTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionRestoreDBInstanceToPointInTimeQueryKey>
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
      ...getActionRestoreDBInstanceToPointInTimeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRestoreDBInstanceToPointInTime<
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
                  ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>,
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
    const mutationDefaults = getPostActionRestoreDBInstanceToPointInTimeMutationOptions<
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

export function getActionRevokeDBSecurityGroupIngressQueryKey(
  args: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RevokeDBSecurityGroupIngress',
    '/#Action=RevokeDBSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function getActionRevokeDBSecurityGroupIngressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionRevokeDBSecurityGroupIngressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RevokeDBSecurityGroupIngress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionRevokeDBSecurityGroupIngress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionRevokeDBSecurityGroupIngressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionRevokeDBSecurityGroupIngress<
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
                  ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>,
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
    const mutationDefaults = getPostActionRevokeDBSecurityGroupIngressMutationOptions<
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

export function getActionStartActivityStreamQueryKey(
  args: InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartActivityStream', '/#Action=StartActivityStream', keyArgs] as const
}

export function getActionStartActivityStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionStartActivityStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartActivityStream'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStartActivityStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionStartActivityStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStartActivityStream<
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
                Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StartActivityStream']['$post']>,
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
    const mutationDefaults = getPostActionStartActivityStreamMutationOptions<
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

export function getActionStartDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartDBCluster', '/#Action=StartDBCluster', keyArgs] as const
}

export function getActionStartDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStartDBClusterQueryKey>
  >({
    queryKey: getActionStartDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStartDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionStartDBClusterQueryKey>
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
      ...getActionStartDBClusterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStartDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionStartDBClusterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionStartDBInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartDBInstance', '/#Action=StartDBInstance', keyArgs] as const
}

export function getActionStartDBInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionStartDBInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartDBInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStartDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionStartDBInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStartDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionStartDBInstanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionStartDBInstanceAutomatedBackupsReplicationQueryKey(
  args: InferRequestType<
    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=StartDBInstanceAutomatedBackupsReplication',
    '/#Action=StartDBInstanceAutomatedBackupsReplication',
    keyArgs,
  ] as const
}

export function getActionStartDBInstanceAutomatedBackupsReplicationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionStartDBInstanceAutomatedBackupsReplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartDBInstanceAutomatedBackupsReplication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStartDBInstanceAutomatedBackupsReplication<
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
  args: () => InferRequestType<
    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
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
                    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionStartDBInstanceAutomatedBackupsReplicationQueryKey>
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
      ...getActionStartDBInstanceAutomatedBackupsReplicationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStartDBInstanceAutomatedBackupsReplication<
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
    const mutationDefaults = getPostActionStartDBInstanceAutomatedBackupsReplicationMutationOptions<
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

export function getActionStartExportTaskQueryKey(
  args: InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartExportTask', '/#Action=StartExportTask', keyArgs] as const
}

export function getActionStartExportTaskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionStartExportTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StartExportTask'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStartExportTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionStartExportTaskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStartExportTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionStartExportTaskMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionStopActivityStreamQueryKey(
  args: InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopActivityStream', '/#Action=StopActivityStream', keyArgs] as const
}

export function getActionStopActivityStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionStopActivityStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StopActivityStream'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStopActivityStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionStopActivityStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStopActivityStream<
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
                Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=StopActivityStream']['$post']>,
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
    const mutationDefaults = getPostActionStopActivityStreamMutationOptions<
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

export function getActionStopDBClusterQueryKey(
  args: InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopDBCluster', '/#Action=StopDBCluster', keyArgs] as const
}

export function getActionStopDBClusterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStopDBClusterQueryKey>
  >({
    queryKey: getActionStopDBClusterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StopDBCluster'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStopDBCluster<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionStopDBClusterQueryKey>
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
    return { ...getActionStopDBClusterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostActionStopDBCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionStopDBClusterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionStopDBInstanceQueryKey(
  args: InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopDBInstance', '/#Action=StopDBInstance', keyArgs] as const
}

export function getActionStopDBInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionStopDBInstanceQueryKey>
  >({
    queryKey: getActionStopDBInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StopDBInstance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStopDBInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionStopDBInstanceQueryKey>
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
      ...getActionStopDBInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStopDBInstance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostActionStopDBInstanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionStopDBInstanceAutomatedBackupsReplicationQueryKey(
  args: InferRequestType<
    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=StopDBInstanceAutomatedBackupsReplication',
    '/#Action=StopDBInstanceAutomatedBackupsReplication',
    keyArgs,
  ] as const
}

export function getActionStopDBInstanceAutomatedBackupsReplicationQueryOptions<
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
  args: InferRequestType<
    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionStopDBInstanceAutomatedBackupsReplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=StopDBInstanceAutomatedBackupsReplication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionStopDBInstanceAutomatedBackupsReplication<
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
  args: () => InferRequestType<
    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
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
                    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActionStopDBInstanceAutomatedBackupsReplicationQueryKey>
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
      ...getActionStopDBInstanceAutomatedBackupsReplicationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostActionStopDBInstanceAutomatedBackupsReplication<
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
    const mutationDefaults = getPostActionStopDBInstanceAutomatedBackupsReplicationMutationOptions<
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

export function getActionSwitchoverBlueGreenDeploymentQueryKey(
  args: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SwitchoverBlueGreenDeployment',
    '/#Action=SwitchoverBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function getActionSwitchoverBlueGreenDeploymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionSwitchoverBlueGreenDeploymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SwitchoverBlueGreenDeployment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionSwitchoverBlueGreenDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getActionSwitchoverBlueGreenDeploymentQueryKey>
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
      ...getActionSwitchoverBlueGreenDeploymentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionSwitchoverBlueGreenDeployment<
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
                  ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>,
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
    const mutationDefaults = getPostActionSwitchoverBlueGreenDeploymentMutationOptions<
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

export function getActionSwitchoverReadReplicaQueryKey(
  args: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SwitchoverReadReplica', '/#Action=SwitchoverReadReplica', keyArgs] as const
}

export function getActionSwitchoverReadReplicaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getActionSwitchoverReadReplicaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SwitchoverReadReplica'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionSwitchoverReadReplica<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getActionSwitchoverReadReplicaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostActionSwitchoverReadReplica<
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
                Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>,
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
    const mutationDefaults = getPostActionSwitchoverReadReplicaMutationOptions<
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
