import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetActionAddRoleToDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddRoleToDBCluster', '/#Action=AddRoleToDBCluster', keyArgs] as const
}

export function useGetActionAddRoleToDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
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
        ? getGetActionAddRoleToDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddRoleToDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddRoleToDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
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
        ? getGetActionAddRoleToDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddRoleToDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddRoleToDBClusterKey() {
  return ['#Action=AddRoleToDBCluster', '/#Action=AddRoleToDBCluster', 'POST'] as const
}

export function usePostActionAddRoleToDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddRoleToDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$post']> },
      ) => parseResponse(client['#Action=AddRoleToDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAddRoleToDBInstanceKey(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddRoleToDBInstance', '/#Action=AddRoleToDBInstance', keyArgs] as const
}

export function useGetActionAddRoleToDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
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
        ? getGetActionAddRoleToDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddRoleToDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddRoleToDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
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
        ? getGetActionAddRoleToDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddRoleToDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddRoleToDBInstanceKey() {
  return ['#Action=AddRoleToDBInstance', '/#Action=AddRoleToDBInstance', 'POST'] as const
}

export function usePostActionAddRoleToDBInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddRoleToDBInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$post']> },
      ) => parseResponse(client['#Action=AddRoleToDBInstance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAddSourceIdentifierToSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AddSourceIdentifierToSubscription',
    '/#Action=AddSourceIdentifierToSubscription',
    keyArgs,
  ] as const
}

export function useGetActionAddSourceIdentifierToSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
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
        ? getGetActionAddSourceIdentifierToSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=AddSourceIdentifierToSubscription'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddSourceIdentifierToSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
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
        ? getGetActionAddSourceIdentifierToSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=AddSourceIdentifierToSubscription'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddSourceIdentifierToSubscriptionKey() {
  return [
    '#Action=AddSourceIdentifierToSubscription',
    '/#Action=AddSourceIdentifierToSubscription',
    'POST',
  ] as const
}

export function usePostActionAddSourceIdentifierToSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddSourceIdentifierToSubscriptionKey()
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
            (typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=AddSourceIdentifierToSubscription'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionAddTagsToResourceKey(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddTagsToResource', '/#Action=AddTagsToResource', keyArgs] as const
}

export function useGetActionAddTagsToResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
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
        ? getGetActionAddTagsToResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddTagsToResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddTagsToResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
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
        ? getGetActionAddTagsToResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddTagsToResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddTagsToResourceKey() {
  return ['#Action=AddTagsToResource', '/#Action=AddTagsToResource', 'POST'] as const
}

export function usePostActionAddTagsToResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AddTagsToResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddTagsToResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddTagsToResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$post']> },
      ) => parseResponse(client['#Action=AddTagsToResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionApplyPendingMaintenanceActionKey(
  args: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ApplyPendingMaintenanceAction',
    '/#Action=ApplyPendingMaintenanceAction',
    keyArgs,
  ] as const
}

export function useGetActionApplyPendingMaintenanceAction<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>>
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
        ? getGetActionApplyPendingMaintenanceActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ApplyPendingMaintenanceAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionApplyPendingMaintenanceAction<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>>
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
        ? getGetActionApplyPendingMaintenanceActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ApplyPendingMaintenanceAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionApplyPendingMaintenanceActionKey() {
  return [
    '#Action=ApplyPendingMaintenanceAction',
    '/#Action=ApplyPendingMaintenanceAction',
    'POST',
  ] as const
}

export function usePostActionApplyPendingMaintenanceAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionApplyPendingMaintenanceActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>
        },
      ) => parseResponse(client['#Action=ApplyPendingMaintenanceAction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionAuthorizeDBSecurityGroupIngressKey(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=AuthorizeDBSecurityGroupIngress',
    '/#Action=AuthorizeDBSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function useGetActionAuthorizeDBSecurityGroupIngress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>>
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
        ? getGetActionAuthorizeDBSecurityGroupIngressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AuthorizeDBSecurityGroupIngress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAuthorizeDBSecurityGroupIngress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>>
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
        ? getGetActionAuthorizeDBSecurityGroupIngressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=AuthorizeDBSecurityGroupIngress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAuthorizeDBSecurityGroupIngressKey() {
  return [
    '#Action=AuthorizeDBSecurityGroupIngress',
    '/#Action=AuthorizeDBSecurityGroupIngress',
    'POST',
  ] as const
}

export function usePostActionAuthorizeDBSecurityGroupIngress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAuthorizeDBSecurityGroupIngressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>
        },
      ) =>
        parseResponse(client['#Action=AuthorizeDBSecurityGroupIngress'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionBacktrackDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=BacktrackDBCluster', '/#Action=BacktrackDBCluster', keyArgs] as const
}

export function useGetActionBacktrackDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
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
        ? getGetActionBacktrackDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=BacktrackDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionBacktrackDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
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
        ? getGetActionBacktrackDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=BacktrackDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionBacktrackDBClusterKey() {
  return ['#Action=BacktrackDBCluster', '/#Action=BacktrackDBCluster', 'POST'] as const
}

export function usePostActionBacktrackDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BacktrackDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionBacktrackDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$post']> },
      ) => parseResponse(client['#Action=BacktrackDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCancelExportTaskKey(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CancelExportTask', '/#Action=CancelExportTask', keyArgs] as const
}

export function useGetActionCancelExportTask<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>
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
        ? getGetActionCancelExportTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CancelExportTask'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCancelExportTask<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>
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
        ? getGetActionCancelExportTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CancelExportTask'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCancelExportTaskKey() {
  return ['#Action=CancelExportTask', '/#Action=CancelExportTask', 'POST'] as const
}

export function usePostActionCancelExportTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CancelExportTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CancelExportTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCancelExportTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CancelExportTask']['$post']> },
      ) => parseResponse(client['#Action=CancelExportTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCopyDBClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CopyDBClusterParameterGroup',
    '/#Action=CopyDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionCopyDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
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
        ? getGetActionCopyDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CopyDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCopyDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
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
        ? getGetActionCopyDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CopyDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCopyDBClusterParameterGroupKey() {
  return [
    '#Action=CopyDBClusterParameterGroup',
    '/#Action=CopyDBClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionCopyDBClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCopyDBClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=CopyDBClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCopyDBClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyDBClusterSnapshot', '/#Action=CopyDBClusterSnapshot', keyArgs] as const
}

export function useGetActionCopyDBClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
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
        ? getGetActionCopyDBClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyDBClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCopyDBClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
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
        ? getGetActionCopyDBClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyDBClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCopyDBClusterSnapshotKey() {
  return ['#Action=CopyDBClusterSnapshot', '/#Action=CopyDBClusterSnapshot', 'POST'] as const
}

export function usePostActionCopyDBClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCopyDBClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']> },
      ) => parseResponse(client['#Action=CopyDBClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCopyDBParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyDBParameterGroup', '/#Action=CopyDBParameterGroup', keyArgs] as const
}

export function useGetActionCopyDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
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
        ? getGetActionCopyDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCopyDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
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
        ? getGetActionCopyDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCopyDBParameterGroupKey() {
  return ['#Action=CopyDBParameterGroup', '/#Action=CopyDBParameterGroup', 'POST'] as const
}

export function usePostActionCopyDBParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCopyDBParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$post']> },
      ) => parseResponse(client['#Action=CopyDBParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCopyDBSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyDBSnapshot', '/#Action=CopyDBSnapshot', keyArgs] as const
}

export function useGetActionCopyDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>
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
        ? getGetActionCopyDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCopyDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>
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
        ? getGetActionCopyDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCopyDBSnapshotKey() {
  return ['#Action=CopyDBSnapshot', '/#Action=CopyDBSnapshot', 'POST'] as const
}

export function usePostActionCopyDBSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCopyDBSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$post']> },
      ) => parseResponse(client['#Action=CopyDBSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCopyOptionGroupKey(
  args: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CopyOptionGroup', '/#Action=CopyOptionGroup', keyArgs] as const
}

export function useGetActionCopyOptionGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>
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
        ? getGetActionCopyOptionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyOptionGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCopyOptionGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>
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
        ? getGetActionCopyOptionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CopyOptionGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCopyOptionGroupKey() {
  return ['#Action=CopyOptionGroup', '/#Action=CopyOptionGroup', 'POST'] as const
}

export function usePostActionCopyOptionGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CopyOptionGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCopyOptionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$post']> },
      ) => parseResponse(client['#Action=CopyOptionGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateBlueGreenDeploymentKey(
  args: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateBlueGreenDeployment',
    '/#Action=CreateBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function useGetActionCreateBlueGreenDeployment<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
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
        ? getGetActionCreateBlueGreenDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateBlueGreenDeployment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateBlueGreenDeployment<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
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
        ? getGetActionCreateBlueGreenDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateBlueGreenDeployment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateBlueGreenDeploymentKey() {
  return [
    '#Action=CreateBlueGreenDeployment',
    '/#Action=CreateBlueGreenDeployment',
    'POST',
  ] as const
}

export function usePostActionCreateBlueGreenDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateBlueGreenDeploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']> },
      ) => parseResponse(client['#Action=CreateBlueGreenDeployment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateCustomDBEngineVersionKey(
  args: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateCustomDBEngineVersion',
    '/#Action=CreateCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function useGetActionCreateCustomDBEngineVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
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
        ? getGetActionCreateCustomDBEngineVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateCustomDBEngineVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateCustomDBEngineVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
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
        ? getGetActionCreateCustomDBEngineVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateCustomDBEngineVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateCustomDBEngineVersionKey() {
  return [
    '#Action=CreateCustomDBEngineVersion',
    '/#Action=CreateCustomDBEngineVersion',
    'POST',
  ] as const
}

export function usePostActionCreateCustomDBEngineVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateCustomDBEngineVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>
        },
      ) => parseResponse(client['#Action=CreateCustomDBEngineVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBCluster', '/#Action=CreateDBCluster', keyArgs] as const
}

export function useGetActionCreateDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>
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
        ? getGetActionCreateDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>
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
        ? getGetActionCreateDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBClusterKey() {
  return ['#Action=CreateDBCluster', '/#Action=CreateDBCluster', 'POST'] as const
}

export function usePostActionCreateDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$post']> },
      ) => parseResponse(client['#Action=CreateDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBClusterEndpointKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBClusterEndpoint', '/#Action=CreateDBClusterEndpoint', keyArgs] as const
}

export function useGetActionCreateDBClusterEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
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
        ? getGetActionCreateDBClusterEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateDBClusterEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBClusterEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
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
        ? getGetActionCreateDBClusterEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateDBClusterEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBClusterEndpointKey() {
  return ['#Action=CreateDBClusterEndpoint', '/#Action=CreateDBClusterEndpoint', 'POST'] as const
}

export function usePostActionCreateDBClusterEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBClusterEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']> },
      ) => parseResponse(client['#Action=CreateDBClusterEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateDBClusterParameterGroup',
    '/#Action=CreateDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionCreateDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>>
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
        ? getGetActionCreateDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>>
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
        ? getGetActionCreateDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBClusterParameterGroupKey() {
  return [
    '#Action=CreateDBClusterParameterGroup',
    '/#Action=CreateDBClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionCreateDBClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=CreateDBClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBClusterSnapshot', '/#Action=CreateDBClusterSnapshot', keyArgs] as const
}

export function useGetActionCreateDBClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
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
        ? getGetActionCreateDBClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateDBClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
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
        ? getGetActionCreateDBClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateDBClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBClusterSnapshotKey() {
  return ['#Action=CreateDBClusterSnapshot', '/#Action=CreateDBClusterSnapshot', 'POST'] as const
}

export function usePostActionCreateDBClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']> },
      ) => parseResponse(client['#Action=CreateDBClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBInstanceKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBInstance', '/#Action=CreateDBInstance', keyArgs] as const
}

export function useGetActionCreateDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>
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
        ? getGetActionCreateDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>
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
        ? getGetActionCreateDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBInstanceKey() {
  return ['#Action=CreateDBInstance', '/#Action=CreateDBInstance', 'POST'] as const
}

export function usePostActionCreateDBInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBInstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$post']> },
      ) => parseResponse(client['#Action=CreateDBInstance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBInstanceReadReplicaKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateDBInstanceReadReplica',
    '/#Action=CreateDBInstanceReadReplica',
    keyArgs,
  ] as const
}

export function useGetActionCreateDBInstanceReadReplica<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
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
        ? getGetActionCreateDBInstanceReadReplicaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateDBInstanceReadReplica'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBInstanceReadReplica<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
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
        ? getGetActionCreateDBInstanceReadReplicaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateDBInstanceReadReplica'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBInstanceReadReplicaKey() {
  return [
    '#Action=CreateDBInstanceReadReplica',
    '/#Action=CreateDBInstanceReadReplica',
    'POST',
  ] as const
}

export function usePostActionCreateDBInstanceReadReplica<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBInstanceReadReplicaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>
        },
      ) => parseResponse(client['#Action=CreateDBInstanceReadReplica'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBParameterGroup', '/#Action=CreateDBParameterGroup', keyArgs] as const
}

export function useGetActionCreateDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
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
        ? getGetActionCreateDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
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
        ? getGetActionCreateDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBParameterGroupKey() {
  return ['#Action=CreateDBParameterGroup', '/#Action=CreateDBParameterGroup', 'POST'] as const
}

export function usePostActionCreateDBParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$post']> },
      ) => parseResponse(client['#Action=CreateDBParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBProxyKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBProxy', '/#Action=CreateDBProxy', keyArgs] as const
}

export function useGetActionCreateDBProxy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>
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
        ? getGetActionCreateDBProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBProxy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBProxy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>
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
        ? getGetActionCreateDBProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBProxy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBProxyKey() {
  return ['#Action=CreateDBProxy', '/#Action=CreateDBProxy', 'POST'] as const
}

export function usePostActionCreateDBProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDBProxy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBProxy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$post']> },
      ) => parseResponse(client['#Action=CreateDBProxy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBProxyEndpointKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBProxyEndpoint', '/#Action=CreateDBProxyEndpoint', keyArgs] as const
}

export function useGetActionCreateDBProxyEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
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
        ? getGetActionCreateDBProxyEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBProxyEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBProxyEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
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
        ? getGetActionCreateDBProxyEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBProxyEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBProxyEndpointKey() {
  return ['#Action=CreateDBProxyEndpoint', '/#Action=CreateDBProxyEndpoint', 'POST'] as const
}

export function usePostActionCreateDBProxyEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBProxyEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']> },
      ) => parseResponse(client['#Action=CreateDBProxyEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBSecurityGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBSecurityGroup', '/#Action=CreateDBSecurityGroup', keyArgs] as const
}

export function useGetActionCreateDBSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
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
        ? getGetActionCreateDBSecurityGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBSecurityGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
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
        ? getGetActionCreateDBSecurityGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBSecurityGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBSecurityGroupKey() {
  return ['#Action=CreateDBSecurityGroup', '/#Action=CreateDBSecurityGroup', 'POST'] as const
}

export function usePostActionCreateDBSecurityGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBSecurityGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']> },
      ) => parseResponse(client['#Action=CreateDBSecurityGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBSnapshot', '/#Action=CreateDBSnapshot', keyArgs] as const
}

export function useGetActionCreateDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>
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
        ? getGetActionCreateDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>
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
        ? getGetActionCreateDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBSnapshotKey() {
  return ['#Action=CreateDBSnapshot', '/#Action=CreateDBSnapshot', 'POST'] as const
}

export function usePostActionCreateDBSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$post']> },
      ) => parseResponse(client['#Action=CreateDBSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDBSubnetGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDBSubnetGroup', '/#Action=CreateDBSubnetGroup', keyArgs] as const
}

export function useGetActionCreateDBSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
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
        ? getGetActionCreateDBSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDBSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
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
        ? getGetActionCreateDBSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDBSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDBSubnetGroupKey() {
  return ['#Action=CreateDBSubnetGroup', '/#Action=CreateDBSubnetGroup', 'POST'] as const
}

export function usePostActionCreateDBSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDBSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']> },
      ) => parseResponse(client['#Action=CreateDBSubnetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateEventSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', keyArgs] as const
}

export function useGetActionCreateEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
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
        ? getGetActionCreateEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
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
        ? getGetActionCreateEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateEventSubscriptionKey() {
  return ['#Action=CreateEventSubscription', '/#Action=CreateEventSubscription', 'POST'] as const
}

export function usePostActionCreateEventSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']> },
      ) => parseResponse(client['#Action=CreateEventSubscription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateGlobalClusterKey(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateGlobalCluster', '/#Action=CreateGlobalCluster', keyArgs] as const
}

export function useGetActionCreateGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
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
        ? getGetActionCreateGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
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
        ? getGetActionCreateGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateGlobalClusterKey() {
  return ['#Action=CreateGlobalCluster', '/#Action=CreateGlobalCluster', 'POST'] as const
}

export function usePostActionCreateGlobalCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateGlobalClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$post']> },
      ) => parseResponse(client['#Action=CreateGlobalCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateOptionGroupKey(
  args: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateOptionGroup', '/#Action=CreateOptionGroup', keyArgs] as const
}

export function useGetActionCreateOptionGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
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
        ? getGetActionCreateOptionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateOptionGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateOptionGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
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
        ? getGetActionCreateOptionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateOptionGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateOptionGroupKey() {
  return ['#Action=CreateOptionGroup', '/#Action=CreateOptionGroup', 'POST'] as const
}

export function usePostActionCreateOptionGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateOptionGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateOptionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$post']> },
      ) => parseResponse(client['#Action=CreateOptionGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteBlueGreenDeploymentKey(
  args: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteBlueGreenDeployment',
    '/#Action=DeleteBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function useGetActionDeleteBlueGreenDeployment<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
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
        ? getGetActionDeleteBlueGreenDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteBlueGreenDeployment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteBlueGreenDeployment<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
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
        ? getGetActionDeleteBlueGreenDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteBlueGreenDeployment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteBlueGreenDeploymentKey() {
  return [
    '#Action=DeleteBlueGreenDeployment',
    '/#Action=DeleteBlueGreenDeployment',
    'POST',
  ] as const
}

export function usePostActionDeleteBlueGreenDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteBlueGreenDeploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']> },
      ) => parseResponse(client['#Action=DeleteBlueGreenDeployment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteCustomDBEngineVersionKey(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteCustomDBEngineVersion',
    '/#Action=DeleteCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function useGetActionDeleteCustomDBEngineVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
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
        ? getGetActionDeleteCustomDBEngineVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteCustomDBEngineVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteCustomDBEngineVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
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
        ? getGetActionDeleteCustomDBEngineVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteCustomDBEngineVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteCustomDBEngineVersionKey() {
  return [
    '#Action=DeleteCustomDBEngineVersion',
    '/#Action=DeleteCustomDBEngineVersion',
    'POST',
  ] as const
}

export function usePostActionDeleteCustomDBEngineVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteCustomDBEngineVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteCustomDBEngineVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBCluster', '/#Action=DeleteDBCluster', keyArgs] as const
}

export function useGetActionDeleteDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>
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
        ? getGetActionDeleteDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>
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
        ? getGetActionDeleteDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBClusterKey() {
  return ['#Action=DeleteDBCluster', '/#Action=DeleteDBCluster', 'POST'] as const
}

export function usePostActionDeleteDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBClusterAutomatedBackupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteDBClusterAutomatedBackup',
    '/#Action=DeleteDBClusterAutomatedBackup',
    keyArgs,
  ] as const
}

export function useGetActionDeleteDBClusterAutomatedBackup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>>
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
        ? getGetActionDeleteDBClusterAutomatedBackupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBClusterAutomatedBackup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBClusterAutomatedBackup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>>
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
        ? getGetActionDeleteDBClusterAutomatedBackupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBClusterAutomatedBackup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBClusterAutomatedBackupKey() {
  return [
    '#Action=DeleteDBClusterAutomatedBackup',
    '/#Action=DeleteDBClusterAutomatedBackup',
    'POST',
  ] as const
}

export function usePostActionDeleteDBClusterAutomatedBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBClusterAutomatedBackupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DeleteDBClusterAutomatedBackup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBClusterEndpointKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBClusterEndpoint', '/#Action=DeleteDBClusterEndpoint', keyArgs] as const
}

export function useGetActionDeleteDBClusterEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
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
        ? getGetActionDeleteDBClusterEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBClusterEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBClusterEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
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
        ? getGetActionDeleteDBClusterEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBClusterEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBClusterEndpointKey() {
  return ['#Action=DeleteDBClusterEndpoint', '/#Action=DeleteDBClusterEndpoint', 'POST'] as const
}

export function usePostActionDeleteDBClusterEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBClusterEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBClusterEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteDBClusterParameterGroup',
    '/#Action=DeleteDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionDeleteDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>>
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
        ? getGetActionDeleteDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>>
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
        ? getGetActionDeleteDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBClusterParameterGroupKey() {
  return [
    '#Action=DeleteDBClusterParameterGroup',
    '/#Action=DeleteDBClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionDeleteDBClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteDBClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBClusterSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBClusterSnapshot', '/#Action=DeleteDBClusterSnapshot', keyArgs] as const
}

export function useGetActionDeleteDBClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
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
        ? getGetActionDeleteDBClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBClusterSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
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
        ? getGetActionDeleteDBClusterSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBClusterSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBClusterSnapshotKey() {
  return ['#Action=DeleteDBClusterSnapshot', '/#Action=DeleteDBClusterSnapshot', 'POST'] as const
}

export function usePostActionDeleteDBClusterSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBClusterSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBClusterSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBInstanceKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBInstance', '/#Action=DeleteDBInstance', keyArgs] as const
}

export function useGetActionDeleteDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>
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
        ? getGetActionDeleteDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>
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
        ? getGetActionDeleteDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBInstanceKey() {
  return ['#Action=DeleteDBInstance', '/#Action=DeleteDBInstance', 'POST'] as const
}

export function usePostActionDeleteDBInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBInstance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBInstanceAutomatedBackupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteDBInstanceAutomatedBackup',
    '/#Action=DeleteDBInstanceAutomatedBackup',
    keyArgs,
  ] as const
}

export function useGetActionDeleteDBInstanceAutomatedBackup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>>
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
        ? getGetActionDeleteDBInstanceAutomatedBackupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBInstanceAutomatedBackup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBInstanceAutomatedBackup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>>
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
        ? getGetActionDeleteDBInstanceAutomatedBackupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteDBInstanceAutomatedBackup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBInstanceAutomatedBackupKey() {
  return [
    '#Action=DeleteDBInstanceAutomatedBackup',
    '/#Action=DeleteDBInstanceAutomatedBackup',
    'POST',
  ] as const
}

export function usePostActionDeleteDBInstanceAutomatedBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBInstanceAutomatedBackupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DeleteDBInstanceAutomatedBackup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBParameterGroup', '/#Action=DeleteDBParameterGroup', keyArgs] as const
}

export function useGetActionDeleteDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
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
        ? getGetActionDeleteDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
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
        ? getGetActionDeleteDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBParameterGroupKey() {
  return ['#Action=DeleteDBParameterGroup', '/#Action=DeleteDBParameterGroup', 'POST'] as const
}

export function usePostActionDeleteDBParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBProxyKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBProxy', '/#Action=DeleteDBProxy', keyArgs] as const
}

export function useGetActionDeleteDBProxy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>
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
        ? getGetActionDeleteDBProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBProxy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBProxy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>
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
        ? getGetActionDeleteDBProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBProxy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBProxyKey() {
  return ['#Action=DeleteDBProxy', '/#Action=DeleteDBProxy', 'POST'] as const
}

export function usePostActionDeleteDBProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBProxy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBProxyEndpointKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBProxyEndpoint', '/#Action=DeleteDBProxyEndpoint', keyArgs] as const
}

export function useGetActionDeleteDBProxyEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
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
        ? getGetActionDeleteDBProxyEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBProxyEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBProxyEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
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
        ? getGetActionDeleteDBProxyEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBProxyEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBProxyEndpointKey() {
  return ['#Action=DeleteDBProxyEndpoint', '/#Action=DeleteDBProxyEndpoint', 'POST'] as const
}

export function usePostActionDeleteDBProxyEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBProxyEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBProxyEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBSecurityGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBSecurityGroup', '/#Action=DeleteDBSecurityGroup', keyArgs] as const
}

export function useGetActionDeleteDBSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
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
        ? getGetActionDeleteDBSecurityGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBSecurityGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBSecurityGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
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
        ? getGetActionDeleteDBSecurityGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBSecurityGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBSecurityGroupKey() {
  return ['#Action=DeleteDBSecurityGroup', '/#Action=DeleteDBSecurityGroup', 'POST'] as const
}

export function usePostActionDeleteDBSecurityGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBSecurityGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBSecurityGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBSnapshot', '/#Action=DeleteDBSnapshot', keyArgs] as const
}

export function useGetActionDeleteDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>
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
        ? getGetActionDeleteDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>
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
        ? getGetActionDeleteDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBSnapshotKey() {
  return ['#Action=DeleteDBSnapshot', '/#Action=DeleteDBSnapshot', 'POST'] as const
}

export function usePostActionDeleteDBSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDBSubnetGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDBSubnetGroup', '/#Action=DeleteDBSubnetGroup', keyArgs] as const
}

export function useGetActionDeleteDBSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
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
        ? getGetActionDeleteDBSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDBSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
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
        ? getGetActionDeleteDBSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDBSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDBSubnetGroupKey() {
  return ['#Action=DeleteDBSubnetGroup', '/#Action=DeleteDBSubnetGroup', 'POST'] as const
}

export function usePostActionDeleteDBSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDBSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']> },
      ) => parseResponse(client['#Action=DeleteDBSubnetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteEventSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', keyArgs] as const
}

export function useGetActionDeleteEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
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
        ? getGetActionDeleteEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
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
        ? getGetActionDeleteEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteEventSubscriptionKey() {
  return ['#Action=DeleteEventSubscription', '/#Action=DeleteEventSubscription', 'POST'] as const
}

export function usePostActionDeleteEventSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']> },
      ) => parseResponse(client['#Action=DeleteEventSubscription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteGlobalClusterKey(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteGlobalCluster', '/#Action=DeleteGlobalCluster', keyArgs] as const
}

export function useGetActionDeleteGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
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
        ? getGetActionDeleteGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
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
        ? getGetActionDeleteGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteGlobalClusterKey() {
  return ['#Action=DeleteGlobalCluster', '/#Action=DeleteGlobalCluster', 'POST'] as const
}

export function usePostActionDeleteGlobalCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteGlobalClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$post']> },
      ) => parseResponse(client['#Action=DeleteGlobalCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteOptionGroupKey(
  args: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteOptionGroup', '/#Action=DeleteOptionGroup', keyArgs] as const
}

export function useGetActionDeleteOptionGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
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
        ? getGetActionDeleteOptionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteOptionGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteOptionGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
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
        ? getGetActionDeleteOptionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteOptionGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteOptionGroupKey() {
  return ['#Action=DeleteOptionGroup', '/#Action=DeleteOptionGroup', 'POST'] as const
}

export function usePostActionDeleteOptionGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteOptionGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteOptionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$post']> },
      ) => parseResponse(client['#Action=DeleteOptionGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeregisterDBProxyTargetsKey(
  args: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeregisterDBProxyTargets', '/#Action=DeregisterDBProxyTargets', keyArgs] as const
}

export function useGetActionDeregisterDBProxyTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
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
        ? getGetActionDeregisterDBProxyTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeregisterDBProxyTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeregisterDBProxyTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
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
        ? getGetActionDeregisterDBProxyTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeregisterDBProxyTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeregisterDBProxyTargetsKey() {
  return ['#Action=DeregisterDBProxyTargets', '/#Action=DeregisterDBProxyTargets', 'POST'] as const
}

export function usePostActionDeregisterDBProxyTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeregisterDBProxyTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']> },
      ) => parseResponse(client['#Action=DeregisterDBProxyTargets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAccountAttributesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    keyArgs,
  ] as const
}

export function useGetActionDescribeAccountAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
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
        ? getGetActionDescribeAccountAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAccountAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAccountAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
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
        ? getGetActionDescribeAccountAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAccountAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAccountAttributesKey() {
  return [
    '#Action=DescribeAccountAttributes',
    '/#Action=DescribeAccountAttributes',
    'POST',
  ] as const
}

export function usePostActionDescribeAccountAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAccountAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']> },
      ) => parseResponse(client['#Action=DescribeAccountAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeBlueGreenDeploymentsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeBlueGreenDeployments',
    '/#Action=DescribeBlueGreenDeployments',
    keyArgs,
  ] as const
}

export function useGetActionDescribeBlueGreenDeployments<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
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
        ? getGetActionDescribeBlueGreenDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeBlueGreenDeployments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeBlueGreenDeployments<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
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
        ? getGetActionDescribeBlueGreenDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeBlueGreenDeployments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeBlueGreenDeploymentsKey() {
  return [
    '#Action=DescribeBlueGreenDeployments',
    '/#Action=DescribeBlueGreenDeployments',
    'POST',
  ] as const
}

export function usePostActionDescribeBlueGreenDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeBlueGreenDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeBlueGreenDeployments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeCertificatesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeCertificates', '/#Action=DescribeCertificates', keyArgs] as const
}

export function useGetActionDescribeCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
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
        ? getGetActionDescribeCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
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
        ? getGetActionDescribeCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeCertificatesKey() {
  return ['#Action=DescribeCertificates', '/#Action=DescribeCertificates', 'POST'] as const
}

export function usePostActionDescribeCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeCertificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$post']> },
      ) => parseResponse(client['#Action=DescribeCertificates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBClusterAutomatedBackupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterAutomatedBackups',
    '/#Action=DescribeDBClusterAutomatedBackups',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBClusterAutomatedBackups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
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
        ? getGetActionDescribeDBClusterAutomatedBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeDBClusterAutomatedBackups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBClusterAutomatedBackups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
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
        ? getGetActionDescribeDBClusterAutomatedBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeDBClusterAutomatedBackups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBClusterAutomatedBackupsKey() {
  return [
    '#Action=DescribeDBClusterAutomatedBackups',
    '/#Action=DescribeDBClusterAutomatedBackups',
    'POST',
  ] as const
}

export function usePostActionDescribeDBClusterAutomatedBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBClusterAutomatedBackupsKey()
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
            (typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribeDBClusterAutomatedBackups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBClusterBacktracksKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterBacktracks',
    '/#Action=DescribeDBClusterBacktracks',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBClusterBacktracks<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
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
        ? getGetActionDescribeDBClusterBacktracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterBacktracks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBClusterBacktracks<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
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
        ? getGetActionDescribeDBClusterBacktracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterBacktracks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBClusterBacktracksKey() {
  return [
    '#Action=DescribeDBClusterBacktracks',
    '/#Action=DescribeDBClusterBacktracks',
    'POST',
  ] as const
}

export function usePostActionDescribeDBClusterBacktracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBClusterBacktracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDBClusterBacktracks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBClusterEndpointsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterEndpoints',
    '/#Action=DescribeDBClusterEndpoints',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBClusterEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
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
        ? getGetActionDescribeDBClusterEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterEndpoints'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBClusterEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
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
        ? getGetActionDescribeDBClusterEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterEndpoints'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBClusterEndpointsKey() {
  return [
    '#Action=DescribeDBClusterEndpoints',
    '/#Action=DescribeDBClusterEndpoints',
    'POST',
  ] as const
}

export function usePostActionDescribeDBClusterEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBClusterEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDBClusterEndpoints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBClusterParameterGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterParameterGroups',
    '/#Action=DescribeDBClusterParameterGroups',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBClusterParameterGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>>
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
        ? getGetActionDescribeDBClusterParameterGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterParameterGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBClusterParameterGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>>
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
        ? getGetActionDescribeDBClusterParameterGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterParameterGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBClusterParameterGroupsKey() {
  return [
    '#Action=DescribeDBClusterParameterGroups',
    '/#Action=DescribeDBClusterParameterGroups',
    'POST',
  ] as const
}

export function usePostActionDescribeDBClusterParameterGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBClusterParameterGroupsKey()
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
            (typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']
          >
        },
      ) =>
        parseResponse(client['#Action=DescribeDBClusterParameterGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBClusterParametersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterParameters',
    '/#Action=DescribeDBClusterParameters',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBClusterParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
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
        ? getGetActionDescribeDBClusterParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBClusterParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
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
        ? getGetActionDescribeDBClusterParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBClusterParametersKey() {
  return [
    '#Action=DescribeDBClusterParameters',
    '/#Action=DescribeDBClusterParameters',
    'POST',
  ] as const
}

export function usePostActionDescribeDBClusterParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBClusterParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDBClusterParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBClusterSnapshotAttributesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterSnapshotAttributes',
    '/#Action=DescribeDBClusterSnapshotAttributes',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBClusterSnapshotAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
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
        ? getGetActionDescribeDBClusterSnapshotAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeDBClusterSnapshotAttributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBClusterSnapshotAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
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
        ? getGetActionDescribeDBClusterSnapshotAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeDBClusterSnapshotAttributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBClusterSnapshotAttributesKey() {
  return [
    '#Action=DescribeDBClusterSnapshotAttributes',
    '/#Action=DescribeDBClusterSnapshotAttributes',
    'POST',
  ] as const
}

export function usePostActionDescribeDBClusterSnapshotAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBClusterSnapshotAttributesKey()
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
            (typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribeDBClusterSnapshotAttributes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBClusterSnapshotsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBClusterSnapshots',
    '/#Action=DescribeDBClusterSnapshots',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBClusterSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
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
        ? getGetActionDescribeDBClusterSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBClusterSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
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
        ? getGetActionDescribeDBClusterSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBClusterSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBClusterSnapshotsKey() {
  return [
    '#Action=DescribeDBClusterSnapshots',
    '/#Action=DescribeDBClusterSnapshots',
    'POST',
  ] as const
}

export function usePostActionDescribeDBClusterSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBClusterSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDBClusterSnapshots'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBClustersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBClusters', '/#Action=DescribeDBClusters', keyArgs] as const
}

export function useGetActionDescribeDBClusters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
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
        ? getGetActionDescribeDBClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBClusters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBClusters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
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
        ? getGetActionDescribeDBClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBClusters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBClustersKey() {
  return ['#Action=DescribeDBClusters', '/#Action=DescribeDBClusters', 'POST'] as const
}

export function usePostActionDescribeDBClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBClusters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBClusters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBEngineVersionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBEngineVersions', '/#Action=DescribeDBEngineVersions', keyArgs] as const
}

export function useGetActionDescribeDBEngineVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
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
        ? getGetActionDescribeDBEngineVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBEngineVersions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBEngineVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
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
        ? getGetActionDescribeDBEngineVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBEngineVersions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBEngineVersionsKey() {
  return ['#Action=DescribeDBEngineVersions', '/#Action=DescribeDBEngineVersions', 'POST'] as const
}

export function usePostActionDescribeDBEngineVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBEngineVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBEngineVersions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBInstanceAutomatedBackupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBInstanceAutomatedBackups',
    '/#Action=DescribeDBInstanceAutomatedBackups',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBInstanceAutomatedBackups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
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
        ? getGetActionDescribeDBInstanceAutomatedBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeDBInstanceAutomatedBackups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBInstanceAutomatedBackups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
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
        ? getGetActionDescribeDBInstanceAutomatedBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeDBInstanceAutomatedBackups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBInstanceAutomatedBackupsKey() {
  return [
    '#Action=DescribeDBInstanceAutomatedBackups',
    '/#Action=DescribeDBInstanceAutomatedBackups',
    'POST',
  ] as const
}

export function usePostActionDescribeDBInstanceAutomatedBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBInstanceAutomatedBackupsKey()
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
            (typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribeDBInstanceAutomatedBackups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBInstancesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBInstances', '/#Action=DescribeDBInstances', keyArgs] as const
}

export function useGetActionDescribeDBInstances<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
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
        ? getGetActionDescribeDBInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBInstances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBInstances<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
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
        ? getGetActionDescribeDBInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBInstances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBInstancesKey() {
  return ['#Action=DescribeDBInstances', '/#Action=DescribeDBInstances', 'POST'] as const
}

export function usePostActionDescribeDBInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBInstances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBInstances'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBLogFilesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBLogFiles', '/#Action=DescribeDBLogFiles', keyArgs] as const
}

export function useGetActionDescribeDBLogFiles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
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
        ? getGetActionDescribeDBLogFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBLogFiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBLogFiles<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
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
        ? getGetActionDescribeDBLogFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBLogFiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBLogFilesKey() {
  return ['#Action=DescribeDBLogFiles', '/#Action=DescribeDBLogFiles', 'POST'] as const
}

export function usePostActionDescribeDBLogFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBLogFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBLogFiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBParameterGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBParameterGroups',
    '/#Action=DescribeDBParameterGroups',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBParameterGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
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
        ? getGetActionDescribeDBParameterGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBParameterGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBParameterGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
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
        ? getGetActionDescribeDBParameterGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBParameterGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBParameterGroupsKey() {
  return [
    '#Action=DescribeDBParameterGroups',
    '/#Action=DescribeDBParameterGroups',
    'POST',
  ] as const
}

export function usePostActionDescribeDBParameterGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBParameterGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBParameterGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBParametersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBParameters', '/#Action=DescribeDBParameters', keyArgs] as const
}

export function useGetActionDescribeDBParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
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
        ? getGetActionDescribeDBParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
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
        ? getGetActionDescribeDBParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBParametersKey() {
  return ['#Action=DescribeDBParameters', '/#Action=DescribeDBParameters', 'POST'] as const
}

export function usePostActionDescribeDBParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBProxiesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBProxies', '/#Action=DescribeDBProxies', keyArgs] as const
}

export function useGetActionDescribeDBProxies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
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
        ? getGetActionDescribeDBProxiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBProxies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBProxies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
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
        ? getGetActionDescribeDBProxiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBProxies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBProxiesKey() {
  return ['#Action=DescribeDBProxies', '/#Action=DescribeDBProxies', 'POST'] as const
}

export function usePostActionDescribeDBProxies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBProxiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBProxies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBProxyEndpointsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBProxyEndpoints', '/#Action=DescribeDBProxyEndpoints', keyArgs] as const
}

export function useGetActionDescribeDBProxyEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
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
        ? getGetActionDescribeDBProxyEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBProxyEndpoints'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBProxyEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
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
        ? getGetActionDescribeDBProxyEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBProxyEndpoints'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBProxyEndpointsKey() {
  return ['#Action=DescribeDBProxyEndpoints', '/#Action=DescribeDBProxyEndpoints', 'POST'] as const
}

export function usePostActionDescribeDBProxyEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBProxyEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBProxyEndpoints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBProxyTargetGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBProxyTargetGroups',
    '/#Action=DescribeDBProxyTargetGroups',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBProxyTargetGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
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
        ? getGetActionDescribeDBProxyTargetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBProxyTargetGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBProxyTargetGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
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
        ? getGetActionDescribeDBProxyTargetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBProxyTargetGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBProxyTargetGroupsKey() {
  return [
    '#Action=DescribeDBProxyTargetGroups',
    '/#Action=DescribeDBProxyTargetGroups',
    'POST',
  ] as const
}

export function usePostActionDescribeDBProxyTargetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBProxyTargetGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDBProxyTargetGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBProxyTargetsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBProxyTargets', '/#Action=DescribeDBProxyTargets', keyArgs] as const
}

export function useGetActionDescribeDBProxyTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
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
        ? getGetActionDescribeDBProxyTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBProxyTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBProxyTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
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
        ? getGetActionDescribeDBProxyTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBProxyTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBProxyTargetsKey() {
  return ['#Action=DescribeDBProxyTargets', '/#Action=DescribeDBProxyTargets', 'POST'] as const
}

export function usePostActionDescribeDBProxyTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBProxyTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBProxyTargets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBSecurityGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBSecurityGroups', '/#Action=DescribeDBSecurityGroups', keyArgs] as const
}

export function useGetActionDescribeDBSecurityGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
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
        ? getGetActionDescribeDBSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBSecurityGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBSecurityGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
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
        ? getGetActionDescribeDBSecurityGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBSecurityGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBSecurityGroupsKey() {
  return ['#Action=DescribeDBSecurityGroups', '/#Action=DescribeDBSecurityGroups', 'POST'] as const
}

export function usePostActionDescribeDBSecurityGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBSecurityGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBSecurityGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBSnapshotAttributesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDBSnapshotAttributes',
    '/#Action=DescribeDBSnapshotAttributes',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDBSnapshotAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
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
        ? getGetActionDescribeDBSnapshotAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBSnapshotAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBSnapshotAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
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
        ? getGetActionDescribeDBSnapshotAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDBSnapshotAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBSnapshotAttributesKey() {
  return [
    '#Action=DescribeDBSnapshotAttributes',
    '/#Action=DescribeDBSnapshotAttributes',
    'POST',
  ] as const
}

export function usePostActionDescribeDBSnapshotAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBSnapshotAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDBSnapshotAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBSnapshotsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBSnapshots', '/#Action=DescribeDBSnapshots', keyArgs] as const
}

export function useGetActionDescribeDBSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
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
        ? getGetActionDescribeDBSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
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
        ? getGetActionDescribeDBSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBSnapshots'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBSnapshotsKey() {
  return ['#Action=DescribeDBSnapshots', '/#Action=DescribeDBSnapshots', 'POST'] as const
}

export function usePostActionDescribeDBSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBSnapshots'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDBSubnetGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDBSubnetGroups', '/#Action=DescribeDBSubnetGroups', keyArgs] as const
}

export function useGetActionDescribeDBSubnetGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
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
        ? getGetActionDescribeDBSubnetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBSubnetGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDBSubnetGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
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
        ? getGetActionDescribeDBSubnetGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDBSubnetGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDBSubnetGroupsKey() {
  return ['#Action=DescribeDBSubnetGroups', '/#Action=DescribeDBSubnetGroups', 'POST'] as const
}

export function usePostActionDescribeDBSubnetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDBSubnetGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']> },
      ) => parseResponse(client['#Action=DescribeDBSubnetGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEngineDefaultClusterParametersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEngineDefaultClusterParameters',
    '/#Action=DescribeEngineDefaultClusterParameters',
    keyArgs,
  ] as const
}

export function useGetActionDescribeEngineDefaultClusterParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
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
        ? getGetActionDescribeEngineDefaultClusterParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeEngineDefaultClusterParameters'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEngineDefaultClusterParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
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
        ? getGetActionDescribeEngineDefaultClusterParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeEngineDefaultClusterParameters'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEngineDefaultClusterParametersKey() {
  return [
    '#Action=DescribeEngineDefaultClusterParameters',
    '/#Action=DescribeEngineDefaultClusterParameters',
    'POST',
  ] as const
}

export function usePostActionDescribeEngineDefaultClusterParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEngineDefaultClusterParametersKey()
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
            (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribeEngineDefaultClusterParameters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEngineDefaultParametersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEngineDefaultParameters',
    '/#Action=DescribeEngineDefaultParameters',
    keyArgs,
  ] as const
}

export function useGetActionDescribeEngineDefaultParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
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
        ? getGetActionDescribeEngineDefaultParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEngineDefaultParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEngineDefaultParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
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
        ? getGetActionDescribeEngineDefaultParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEngineDefaultParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEngineDefaultParametersKey() {
  return [
    '#Action=DescribeEngineDefaultParameters',
    '/#Action=DescribeEngineDefaultParameters',
    'POST',
  ] as const
}

export function usePostActionDescribeEngineDefaultParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEngineDefaultParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>
        },
      ) =>
        parseResponse(client['#Action=DescribeEngineDefaultParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEventCategoriesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', keyArgs] as const
}

export function useGetActionDescribeEventCategories<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
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
        ? getGetActionDescribeEventCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEventCategories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEventCategories<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
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
        ? getGetActionDescribeEventCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEventCategories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEventCategoriesKey() {
  return ['#Action=DescribeEventCategories', '/#Action=DescribeEventCategories', 'POST'] as const
}

export function usePostActionDescribeEventCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventCategories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEventCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']> },
      ) => parseResponse(client['#Action=DescribeEventCategories'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEventSubscriptionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeEventSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
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
        ? getGetActionDescribeEventSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEventSubscriptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEventSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
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
        ? getGetActionDescribeEventSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeEventSubscriptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEventSubscriptionsKey() {
  return [
    '#Action=DescribeEventSubscriptions',
    '/#Action=DescribeEventSubscriptions',
    'POST',
  ] as const
}

export function usePostActionDescribeEventSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEventSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeEventSubscriptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeEventsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', keyArgs] as const
}

export function useGetActionDescribeEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
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
        ? getGetActionDescribeEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeEvents'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
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
        ? getGetActionDescribeEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeEvents'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeEventsKey() {
  return ['#Action=DescribeEvents', '/#Action=DescribeEvents', 'POST'] as const
}

export function usePostActionDescribeEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']> },
      ) => parseResponse(client['#Action=DescribeEvents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeExportTasksKey(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeExportTasks', '/#Action=DescribeExportTasks', keyArgs] as const
}

export function useGetActionDescribeExportTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
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
        ? getGetActionDescribeExportTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeExportTasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeExportTasks<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
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
        ? getGetActionDescribeExportTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeExportTasks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeExportTasksKey() {
  return ['#Action=DescribeExportTasks', '/#Action=DescribeExportTasks', 'POST'] as const
}

export function usePostActionDescribeExportTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeExportTasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeExportTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$post']> },
      ) => parseResponse(client['#Action=DescribeExportTasks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeGlobalClustersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeGlobalClusters', '/#Action=DescribeGlobalClusters', keyArgs] as const
}

export function useGetActionDescribeGlobalClusters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
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
        ? getGetActionDescribeGlobalClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeGlobalClusters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeGlobalClusters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
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
        ? getGetActionDescribeGlobalClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeGlobalClusters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeGlobalClustersKey() {
  return ['#Action=DescribeGlobalClusters', '/#Action=DescribeGlobalClusters', 'POST'] as const
}

export function usePostActionDescribeGlobalClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeGlobalClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$post']> },
      ) => parseResponse(client['#Action=DescribeGlobalClusters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeOptionGroupOptionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeOptionGroupOptions',
    '/#Action=DescribeOptionGroupOptions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeOptionGroupOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
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
        ? getGetActionDescribeOptionGroupOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeOptionGroupOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeOptionGroupOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
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
        ? getGetActionDescribeOptionGroupOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeOptionGroupOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeOptionGroupOptionsKey() {
  return [
    '#Action=DescribeOptionGroupOptions',
    '/#Action=DescribeOptionGroupOptions',
    'POST',
  ] as const
}

export function usePostActionDescribeOptionGroupOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeOptionGroupOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeOptionGroupOptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeOptionGroupsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeOptionGroups', '/#Action=DescribeOptionGroups', keyArgs] as const
}

export function useGetActionDescribeOptionGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
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
        ? getGetActionDescribeOptionGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeOptionGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeOptionGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
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
        ? getGetActionDescribeOptionGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeOptionGroups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeOptionGroupsKey() {
  return ['#Action=DescribeOptionGroups', '/#Action=DescribeOptionGroups', 'POST'] as const
}

export function usePostActionDescribeOptionGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeOptionGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeOptionGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$post']> },
      ) => parseResponse(client['#Action=DescribeOptionGroups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeOrderableDBInstanceOptionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeOrderableDBInstanceOptions',
    '/#Action=DescribeOrderableDBInstanceOptions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeOrderableDBInstanceOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
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
        ? getGetActionDescribeOrderableDBInstanceOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeOrderableDBInstanceOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeOrderableDBInstanceOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
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
        ? getGetActionDescribeOrderableDBInstanceOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeOrderableDBInstanceOptions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeOrderableDBInstanceOptionsKey() {
  return [
    '#Action=DescribeOrderableDBInstanceOptions',
    '/#Action=DescribeOrderableDBInstanceOptions',
    'POST',
  ] as const
}

export function usePostActionDescribeOrderableDBInstanceOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeOrderableDBInstanceOptionsKey()
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
            (typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribeOrderableDBInstanceOptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribePendingMaintenanceActionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribePendingMaintenanceActions',
    '/#Action=DescribePendingMaintenanceActions',
    keyArgs,
  ] as const
}

export function useGetActionDescribePendingMaintenanceActions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
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
        ? getGetActionDescribePendingMaintenanceActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribePendingMaintenanceActions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribePendingMaintenanceActions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
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
        ? getGetActionDescribePendingMaintenanceActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribePendingMaintenanceActions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribePendingMaintenanceActionsKey() {
  return [
    '#Action=DescribePendingMaintenanceActions',
    '/#Action=DescribePendingMaintenanceActions',
    'POST',
  ] as const
}

export function usePostActionDescribePendingMaintenanceActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribePendingMaintenanceActionsKey()
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
            (typeof client)['#Action=DescribePendingMaintenanceActions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribePendingMaintenanceActions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeReservedDBInstancesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReservedDBInstances',
    '/#Action=DescribeReservedDBInstances',
    keyArgs,
  ] as const
}

export function useGetActionDescribeReservedDBInstances<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
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
        ? getGetActionDescribeReservedDBInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeReservedDBInstances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeReservedDBInstances<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
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
        ? getGetActionDescribeReservedDBInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeReservedDBInstances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeReservedDBInstancesKey() {
  return [
    '#Action=DescribeReservedDBInstances',
    '/#Action=DescribeReservedDBInstances',
    'POST',
  ] as const
}

export function usePostActionDescribeReservedDBInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeReservedDBInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeReservedDBInstances'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeReservedDBInstancesOfferingsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeReservedDBInstancesOfferings',
    '/#Action=DescribeReservedDBInstancesOfferings',
    keyArgs,
  ] as const
}

export function useGetActionDescribeReservedDBInstancesOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>
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
        ? getGetActionDescribeReservedDBInstancesOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeReservedDBInstancesOfferings'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeReservedDBInstancesOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>
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
        ? getGetActionDescribeReservedDBInstancesOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeReservedDBInstancesOfferings'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeReservedDBInstancesOfferingsKey() {
  return [
    '#Action=DescribeReservedDBInstancesOfferings',
    '/#Action=DescribeReservedDBInstancesOfferings',
    'POST',
  ] as const
}

export function usePostActionDescribeReservedDBInstancesOfferings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeReservedDBInstancesOfferingsKey()
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
            (typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribeReservedDBInstancesOfferings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeSourceRegionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeSourceRegions', '/#Action=DescribeSourceRegions', keyArgs] as const
}

export function useGetActionDescribeSourceRegions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
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
        ? getGetActionDescribeSourceRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeSourceRegions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeSourceRegions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
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
        ? getGetActionDescribeSourceRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeSourceRegions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeSourceRegionsKey() {
  return ['#Action=DescribeSourceRegions', '/#Action=DescribeSourceRegions', 'POST'] as const
}

export function usePostActionDescribeSourceRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSourceRegions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeSourceRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$post']> },
      ) => parseResponse(client['#Action=DescribeSourceRegions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeValidDBInstanceModificationsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeValidDBInstanceModifications',
    '/#Action=DescribeValidDBInstanceModifications',
    keyArgs,
  ] as const
}

export function useGetActionDescribeValidDBInstanceModifications<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>
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
        ? getGetActionDescribeValidDBInstanceModificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeValidDBInstanceModifications'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeValidDBInstanceModifications<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>
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
        ? getGetActionDescribeValidDBInstanceModificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=DescribeValidDBInstanceModifications'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeValidDBInstanceModificationsKey() {
  return [
    '#Action=DescribeValidDBInstanceModifications',
    '/#Action=DescribeValidDBInstanceModifications',
    'POST',
  ] as const
}

export function usePostActionDescribeValidDBInstanceModifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeValidDBInstanceModificationsKey()
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
            (typeof client)['#Action=DescribeValidDBInstanceModifications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=DescribeValidDBInstanceModifications'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionDownloadDBLogFilePortionKey(
  args: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DownloadDBLogFilePortion', '/#Action=DownloadDBLogFilePortion', keyArgs] as const
}

export function useGetActionDownloadDBLogFilePortion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
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
        ? getGetActionDownloadDBLogFilePortionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DownloadDBLogFilePortion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDownloadDBLogFilePortion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
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
        ? getGetActionDownloadDBLogFilePortionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DownloadDBLogFilePortion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDownloadDBLogFilePortionKey() {
  return ['#Action=DownloadDBLogFilePortion', '/#Action=DownloadDBLogFilePortion', 'POST'] as const
}

export function usePostActionDownloadDBLogFilePortion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDownloadDBLogFilePortionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']> },
      ) => parseResponse(client['#Action=DownloadDBLogFilePortion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionFailoverDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=FailoverDBCluster', '/#Action=FailoverDBCluster', keyArgs] as const
}

export function useGetActionFailoverDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
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
        ? getGetActionFailoverDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=FailoverDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionFailoverDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
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
        ? getGetActionFailoverDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=FailoverDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionFailoverDBClusterKey() {
  return ['#Action=FailoverDBCluster', '/#Action=FailoverDBCluster', 'POST'] as const
}

export function usePostActionFailoverDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=FailoverDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionFailoverDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$post']> },
      ) => parseResponse(client['#Action=FailoverDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionFailoverGlobalClusterKey(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=FailoverGlobalCluster', '/#Action=FailoverGlobalCluster', keyArgs] as const
}

export function useGetActionFailoverGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
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
        ? getGetActionFailoverGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=FailoverGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionFailoverGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
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
        ? getGetActionFailoverGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=FailoverGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionFailoverGlobalClusterKey() {
  return ['#Action=FailoverGlobalCluster', '/#Action=FailoverGlobalCluster', 'POST'] as const
}

export function usePostActionFailoverGlobalCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionFailoverGlobalClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$post']> },
      ) => parseResponse(client['#Action=FailoverGlobalCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListTagsForResourceKey(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function useGetActionListTagsForResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
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
        ? getGetActionListTagsForResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTagsForResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListTagsForResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
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
        ? getGetActionListTagsForResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTagsForResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListTagsForResourceKey() {
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', 'POST'] as const
}

export function usePostActionListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']> },
      ) => parseResponse(client['#Action=ListTagsForResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyActivityStreamKey(
  args: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyActivityStream', '/#Action=ModifyActivityStream', keyArgs] as const
}

export function useGetActionModifyActivityStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
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
        ? getGetActionModifyActivityStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyActivityStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyActivityStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
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
        ? getGetActionModifyActivityStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyActivityStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyActivityStreamKey() {
  return ['#Action=ModifyActivityStream', '/#Action=ModifyActivityStream', 'POST'] as const
}

export function usePostActionModifyActivityStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyActivityStream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyActivityStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$post']> },
      ) => parseResponse(client['#Action=ModifyActivityStream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyCertificatesKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyCertificates', '/#Action=ModifyCertificates', keyArgs] as const
}

export function useGetActionModifyCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
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
        ? getGetActionModifyCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyCertificates<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
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
        ? getGetActionModifyCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyCertificates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyCertificatesKey() {
  return ['#Action=ModifyCertificates', '/#Action=ModifyCertificates', 'POST'] as const
}

export function usePostActionModifyCertificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCertificates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyCertificates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyCertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$post']> },
      ) => parseResponse(client['#Action=ModifyCertificates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyCurrentDBClusterCapacityKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyCurrentDBClusterCapacity',
    '/#Action=ModifyCurrentDBClusterCapacity',
    keyArgs,
  ] as const
}

export function useGetActionModifyCurrentDBClusterCapacity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>>
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
        ? getGetActionModifyCurrentDBClusterCapacityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyCurrentDBClusterCapacity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyCurrentDBClusterCapacity<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>>
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
        ? getGetActionModifyCurrentDBClusterCapacityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyCurrentDBClusterCapacity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyCurrentDBClusterCapacityKey() {
  return [
    '#Action=ModifyCurrentDBClusterCapacity',
    '/#Action=ModifyCurrentDBClusterCapacity',
    'POST',
  ] as const
}

export function usePostActionModifyCurrentDBClusterCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyCurrentDBClusterCapacityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>
        },
      ) =>
        parseResponse(client['#Action=ModifyCurrentDBClusterCapacity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyCustomDBEngineVersionKey(
  args: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyCustomDBEngineVersion',
    '/#Action=ModifyCustomDBEngineVersion',
    keyArgs,
  ] as const
}

export function useGetActionModifyCustomDBEngineVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
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
        ? getGetActionModifyCustomDBEngineVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyCustomDBEngineVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyCustomDBEngineVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
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
        ? getGetActionModifyCustomDBEngineVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyCustomDBEngineVersion'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyCustomDBEngineVersionKey() {
  return [
    '#Action=ModifyCustomDBEngineVersion',
    '/#Action=ModifyCustomDBEngineVersion',
    'POST',
  ] as const
}

export function usePostActionModifyCustomDBEngineVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyCustomDBEngineVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>
        },
      ) => parseResponse(client['#Action=ModifyCustomDBEngineVersion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBCluster', '/#Action=ModifyDBCluster', keyArgs] as const
}

export function useGetActionModifyDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>
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
        ? getGetActionModifyDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>
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
        ? getGetActionModifyDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBClusterKey() {
  return ['#Action=ModifyDBCluster', '/#Action=ModifyDBCluster', 'POST'] as const
}

export function usePostActionModifyDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBClusterEndpointKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBClusterEndpoint', '/#Action=ModifyDBClusterEndpoint', keyArgs] as const
}

export function useGetActionModifyDBClusterEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
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
        ? getGetActionModifyDBClusterEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBClusterEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBClusterEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
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
        ? getGetActionModifyDBClusterEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBClusterEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBClusterEndpointKey() {
  return ['#Action=ModifyDBClusterEndpoint', '/#Action=ModifyDBClusterEndpoint', 'POST'] as const
}

export function usePostActionModifyDBClusterEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBClusterEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBClusterEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyDBClusterParameterGroup',
    '/#Action=ModifyDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionModifyDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>>
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
        ? getGetActionModifyDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>>
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
        ? getGetActionModifyDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBClusterParameterGroupKey() {
  return [
    '#Action=ModifyDBClusterParameterGroup',
    '/#Action=ModifyDBClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionModifyDBClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=ModifyDBClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBClusterSnapshotAttributeKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyDBClusterSnapshotAttribute',
    '/#Action=ModifyDBClusterSnapshotAttribute',
    keyArgs,
  ] as const
}

export function useGetActionModifyDBClusterSnapshotAttribute<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>>
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
        ? getGetActionModifyDBClusterSnapshotAttributeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBClusterSnapshotAttribute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBClusterSnapshotAttribute<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>>
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
        ? getGetActionModifyDBClusterSnapshotAttributeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBClusterSnapshotAttribute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBClusterSnapshotAttributeKey() {
  return [
    '#Action=ModifyDBClusterSnapshotAttribute',
    '/#Action=ModifyDBClusterSnapshotAttribute',
    'POST',
  ] as const
}

export function usePostActionModifyDBClusterSnapshotAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBClusterSnapshotAttributeKey()
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
            (typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']
          >
        },
      ) =>
        parseResponse(client['#Action=ModifyDBClusterSnapshotAttribute'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBInstanceKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBInstance', '/#Action=ModifyDBInstance', keyArgs] as const
}

export function useGetActionModifyDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>
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
        ? getGetActionModifyDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>
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
        ? getGetActionModifyDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBInstanceKey() {
  return ['#Action=ModifyDBInstance', '/#Action=ModifyDBInstance', 'POST'] as const
}

export function usePostActionModifyDBInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBInstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBInstance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBParameterGroup', '/#Action=ModifyDBParameterGroup', keyArgs] as const
}

export function useGetActionModifyDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
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
        ? getGetActionModifyDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
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
        ? getGetActionModifyDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBParameterGroupKey() {
  return ['#Action=ModifyDBParameterGroup', '/#Action=ModifyDBParameterGroup', 'POST'] as const
}

export function usePostActionModifyDBParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBProxyKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBProxy', '/#Action=ModifyDBProxy', keyArgs] as const
}

export function useGetActionModifyDBProxy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>
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
        ? getGetActionModifyDBProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBProxy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBProxy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>
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
        ? getGetActionModifyDBProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBProxy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBProxyKey() {
  return ['#Action=ModifyDBProxy', '/#Action=ModifyDBProxy', 'POST'] as const
}

export function usePostActionModifyDBProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBProxy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBProxyEndpointKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBProxyEndpoint', '/#Action=ModifyDBProxyEndpoint', keyArgs] as const
}

export function useGetActionModifyDBProxyEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
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
        ? getGetActionModifyDBProxyEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBProxyEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBProxyEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
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
        ? getGetActionModifyDBProxyEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBProxyEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBProxyEndpointKey() {
  return ['#Action=ModifyDBProxyEndpoint', '/#Action=ModifyDBProxyEndpoint', 'POST'] as const
}

export function usePostActionModifyDBProxyEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBProxyEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBProxyEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBProxyTargetGroupKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBProxyTargetGroup', '/#Action=ModifyDBProxyTargetGroup', keyArgs] as const
}

export function useGetActionModifyDBProxyTargetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
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
        ? getGetActionModifyDBProxyTargetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBProxyTargetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBProxyTargetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
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
        ? getGetActionModifyDBProxyTargetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBProxyTargetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBProxyTargetGroupKey() {
  return ['#Action=ModifyDBProxyTargetGroup', '/#Action=ModifyDBProxyTargetGroup', 'POST'] as const
}

export function usePostActionModifyDBProxyTargetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBProxyTargetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBProxyTargetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBSnapshot', '/#Action=ModifyDBSnapshot', keyArgs] as const
}

export function useGetActionModifyDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>
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
        ? getGetActionModifyDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>
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
        ? getGetActionModifyDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBSnapshotKey() {
  return ['#Action=ModifyDBSnapshot', '/#Action=ModifyDBSnapshot', 'POST'] as const
}

export function usePostActionModifyDBSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBSnapshotAttributeKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ModifyDBSnapshotAttribute',
    '/#Action=ModifyDBSnapshotAttribute',
    keyArgs,
  ] as const
}

export function useGetActionModifyDBSnapshotAttribute<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
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
        ? getGetActionModifyDBSnapshotAttributeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBSnapshotAttribute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBSnapshotAttribute<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
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
        ? getGetActionModifyDBSnapshotAttributeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyDBSnapshotAttribute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBSnapshotAttributeKey() {
  return [
    '#Action=ModifyDBSnapshotAttribute',
    '/#Action=ModifyDBSnapshotAttribute',
    'POST',
  ] as const
}

export function usePostActionModifyDBSnapshotAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBSnapshotAttributeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBSnapshotAttribute'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyDBSubnetGroupKey(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyDBSubnetGroup', '/#Action=ModifyDBSubnetGroup', keyArgs] as const
}

export function useGetActionModifyDBSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
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
        ? getGetActionModifyDBSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyDBSubnetGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
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
        ? getGetActionModifyDBSubnetGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyDBSubnetGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyDBSubnetGroupKey() {
  return ['#Action=ModifyDBSubnetGroup', '/#Action=ModifyDBSubnetGroup', 'POST'] as const
}

export function usePostActionModifyDBSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyDBSubnetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']> },
      ) => parseResponse(client['#Action=ModifyDBSubnetGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyEventSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', keyArgs] as const
}

export function useGetActionModifyEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
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
        ? getGetActionModifyEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyEventSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
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
        ? getGetActionModifyEventSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ModifyEventSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyEventSubscriptionKey() {
  return ['#Action=ModifyEventSubscription', '/#Action=ModifyEventSubscription', 'POST'] as const
}

export function usePostActionModifyEventSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyEventSubscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyEventSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']> },
      ) => parseResponse(client['#Action=ModifyEventSubscription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyGlobalClusterKey(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyGlobalCluster', '/#Action=ModifyGlobalCluster', keyArgs] as const
}

export function useGetActionModifyGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
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
        ? getGetActionModifyGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
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
        ? getGetActionModifyGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyGlobalClusterKey() {
  return ['#Action=ModifyGlobalCluster', '/#Action=ModifyGlobalCluster', 'POST'] as const
}

export function usePostActionModifyGlobalCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyGlobalClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$post']> },
      ) => parseResponse(client['#Action=ModifyGlobalCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionModifyOptionGroupKey(
  args: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ModifyOptionGroup', '/#Action=ModifyOptionGroup', keyArgs] as const
}

export function useGetActionModifyOptionGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
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
        ? getGetActionModifyOptionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyOptionGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionModifyOptionGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
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
        ? getGetActionModifyOptionGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ModifyOptionGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionModifyOptionGroupKey() {
  return ['#Action=ModifyOptionGroup', '/#Action=ModifyOptionGroup', 'POST'] as const
}

export function usePostActionModifyOptionGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ModifyOptionGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionModifyOptionGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$post']> },
      ) => parseResponse(client['#Action=ModifyOptionGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPromoteReadReplicaKey(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PromoteReadReplica', '/#Action=PromoteReadReplica', keyArgs] as const
}

export function useGetActionPromoteReadReplica<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
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
        ? getGetActionPromoteReadReplicaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PromoteReadReplica'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPromoteReadReplica<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
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
        ? getGetActionPromoteReadReplicaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PromoteReadReplica'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPromoteReadReplicaKey() {
  return ['#Action=PromoteReadReplica', '/#Action=PromoteReadReplica', 'POST'] as const
}

export function usePostActionPromoteReadReplica<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplica']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPromoteReadReplicaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$post']> },
      ) => parseResponse(client['#Action=PromoteReadReplica'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPromoteReadReplicaDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PromoteReadReplicaDBCluster',
    '/#Action=PromoteReadReplicaDBCluster',
    keyArgs,
  ] as const
}

export function useGetActionPromoteReadReplicaDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
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
        ? getGetActionPromoteReadReplicaDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PromoteReadReplicaDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPromoteReadReplicaDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
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
        ? getGetActionPromoteReadReplicaDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PromoteReadReplicaDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPromoteReadReplicaDBClusterKey() {
  return [
    '#Action=PromoteReadReplicaDBCluster',
    '/#Action=PromoteReadReplicaDBCluster',
    'POST',
  ] as const
}

export function usePostActionPromoteReadReplicaDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPromoteReadReplicaDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>
        },
      ) => parseResponse(client['#Action=PromoteReadReplicaDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPurchaseReservedDBInstancesOfferingKey(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=PurchaseReservedDBInstancesOffering',
    '/#Action=PurchaseReservedDBInstancesOffering',
    keyArgs,
  ] as const
}

export function useGetActionPurchaseReservedDBInstancesOffering<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
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
        ? getGetActionPurchaseReservedDBInstancesOfferingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=PurchaseReservedDBInstancesOffering'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPurchaseReservedDBInstancesOffering<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
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
        ? getGetActionPurchaseReservedDBInstancesOfferingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=PurchaseReservedDBInstancesOffering'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionPurchaseReservedDBInstancesOfferingKey() {
  return [
    '#Action=PurchaseReservedDBInstancesOffering',
    '/#Action=PurchaseReservedDBInstancesOffering',
    'POST',
  ] as const
}

export function usePostActionPurchaseReservedDBInstancesOffering<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPurchaseReservedDBInstancesOfferingKey()
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
            (typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=PurchaseReservedDBInstancesOffering'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionRebootDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RebootDBCluster', '/#Action=RebootDBCluster', keyArgs] as const
}

export function useGetActionRebootDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>
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
        ? getGetActionRebootDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RebootDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRebootDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>
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
        ? getGetActionRebootDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RebootDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRebootDBClusterKey() {
  return ['#Action=RebootDBCluster', '/#Action=RebootDBCluster', 'POST'] as const
}

export function usePostActionRebootDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RebootDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RebootDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRebootDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$post']> },
      ) => parseResponse(client['#Action=RebootDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRebootDBInstanceKey(
  args: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RebootDBInstance', '/#Action=RebootDBInstance', keyArgs] as const
}

export function useGetActionRebootDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>
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
        ? getGetActionRebootDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RebootDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRebootDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>
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
        ? getGetActionRebootDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RebootDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRebootDBInstanceKey() {
  return ['#Action=RebootDBInstance', '/#Action=RebootDBInstance', 'POST'] as const
}

export function usePostActionRebootDBInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RebootDBInstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RebootDBInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRebootDBInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$post']> },
      ) => parseResponse(client['#Action=RebootDBInstance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRegisterDBProxyTargetsKey(
  args: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RegisterDBProxyTargets', '/#Action=RegisterDBProxyTargets', keyArgs] as const
}

export function useGetActionRegisterDBProxyTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
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
        ? getGetActionRegisterDBProxyTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RegisterDBProxyTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRegisterDBProxyTargets<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
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
        ? getGetActionRegisterDBProxyTargetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RegisterDBProxyTargets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRegisterDBProxyTargetsKey() {
  return ['#Action=RegisterDBProxyTargets', '/#Action=RegisterDBProxyTargets', 'POST'] as const
}

export function usePostActionRegisterDBProxyTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRegisterDBProxyTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']> },
      ) => parseResponse(client['#Action=RegisterDBProxyTargets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveFromGlobalClusterKey(
  args: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveFromGlobalCluster', '/#Action=RemoveFromGlobalCluster', keyArgs] as const
}

export function useGetActionRemoveFromGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
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
        ? getGetActionRemoveFromGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveFromGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveFromGlobalCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
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
        ? getGetActionRemoveFromGlobalClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveFromGlobalCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveFromGlobalClusterKey() {
  return ['#Action=RemoveFromGlobalCluster', '/#Action=RemoveFromGlobalCluster', 'POST'] as const
}

export function usePostActionRemoveFromGlobalCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveFromGlobalClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']> },
      ) => parseResponse(client['#Action=RemoveFromGlobalCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveRoleFromDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveRoleFromDBCluster', '/#Action=RemoveRoleFromDBCluster', keyArgs] as const
}

export function useGetActionRemoveRoleFromDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
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
        ? getGetActionRemoveRoleFromDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveRoleFromDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveRoleFromDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
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
        ? getGetActionRemoveRoleFromDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveRoleFromDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveRoleFromDBClusterKey() {
  return ['#Action=RemoveRoleFromDBCluster', '/#Action=RemoveRoleFromDBCluster', 'POST'] as const
}

export function usePostActionRemoveRoleFromDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveRoleFromDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']> },
      ) => parseResponse(client['#Action=RemoveRoleFromDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveRoleFromDBInstanceKey(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveRoleFromDBInstance', '/#Action=RemoveRoleFromDBInstance', keyArgs] as const
}

export function useGetActionRemoveRoleFromDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
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
        ? getGetActionRemoveRoleFromDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveRoleFromDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveRoleFromDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
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
        ? getGetActionRemoveRoleFromDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RemoveRoleFromDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveRoleFromDBInstanceKey() {
  return ['#Action=RemoveRoleFromDBInstance', '/#Action=RemoveRoleFromDBInstance', 'POST'] as const
}

export function usePostActionRemoveRoleFromDBInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveRoleFromDBInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']> },
      ) => parseResponse(client['#Action=RemoveRoleFromDBInstance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveSourceIdentifierFromSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RemoveSourceIdentifierFromSubscription',
    '/#Action=RemoveSourceIdentifierFromSubscription',
    keyArgs,
  ] as const
}

export function useGetActionRemoveSourceIdentifierFromSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
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
        ? getGetActionRemoveSourceIdentifierFromSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=RemoveSourceIdentifierFromSubscription'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveSourceIdentifierFromSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
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
        ? getGetActionRemoveSourceIdentifierFromSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=RemoveSourceIdentifierFromSubscription'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveSourceIdentifierFromSubscriptionKey() {
  return [
    '#Action=RemoveSourceIdentifierFromSubscription',
    '/#Action=RemoveSourceIdentifierFromSubscription',
    'POST',
  ] as const
}

export function usePostActionRemoveSourceIdentifierFromSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveSourceIdentifierFromSubscriptionKey()
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
            (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=RemoveSourceIdentifierFromSubscription'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemoveTagsFromResourceKey(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemoveTagsFromResource', '/#Action=RemoveTagsFromResource', keyArgs] as const
}

export function useGetActionRemoveTagsFromResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
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
        ? getGetActionRemoveTagsFromResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RemoveTagsFromResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemoveTagsFromResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
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
        ? getGetActionRemoveTagsFromResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RemoveTagsFromResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemoveTagsFromResourceKey() {
  return ['#Action=RemoveTagsFromResource', '/#Action=RemoveTagsFromResource', 'POST'] as const
}

export function usePostActionRemoveTagsFromResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemoveTagsFromResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$post']> },
      ) => parseResponse(client['#Action=RemoveTagsFromResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionResetDBClusterParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ResetDBClusterParameterGroup',
    '/#Action=ResetDBClusterParameterGroup',
    keyArgs,
  ] as const
}

export function useGetActionResetDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
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
        ? getGetActionResetDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ResetDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResetDBClusterParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
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
        ? getGetActionResetDBClusterParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ResetDBClusterParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionResetDBClusterParameterGroupKey() {
  return [
    '#Action=ResetDBClusterParameterGroup',
    '/#Action=ResetDBClusterParameterGroup',
    'POST',
  ] as const
}

export function usePostActionResetDBClusterParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionResetDBClusterParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>
        },
      ) => parseResponse(client['#Action=ResetDBClusterParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionResetDBParameterGroupKey(
  args: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ResetDBParameterGroup', '/#Action=ResetDBParameterGroup', keyArgs] as const
}

export function useGetActionResetDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
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
        ? getGetActionResetDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ResetDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionResetDBParameterGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
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
        ? getGetActionResetDBParameterGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ResetDBParameterGroup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionResetDBParameterGroupKey() {
  return ['#Action=ResetDBParameterGroup', '/#Action=ResetDBParameterGroup', 'POST'] as const
}

export function usePostActionResetDBParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionResetDBParameterGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$post']> },
      ) => parseResponse(client['#Action=ResetDBParameterGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRestoreDBClusterFromS3Key(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RestoreDBClusterFromS3', '/#Action=RestoreDBClusterFromS3', keyArgs] as const
}

export function useGetActionRestoreDBClusterFromS3<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
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
        ? getGetActionRestoreDBClusterFromS3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RestoreDBClusterFromS3'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRestoreDBClusterFromS3<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
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
        ? getGetActionRestoreDBClusterFromS3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RestoreDBClusterFromS3'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRestoreDBClusterFromS3Key() {
  return ['#Action=RestoreDBClusterFromS3', '/#Action=RestoreDBClusterFromS3', 'POST'] as const
}

export function usePostActionRestoreDBClusterFromS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestoreDBClusterFromS3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']> },
      ) => parseResponse(client['#Action=RestoreDBClusterFromS3'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRestoreDBClusterFromSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreDBClusterFromSnapshot',
    '/#Action=RestoreDBClusterFromSnapshot',
    keyArgs,
  ] as const
}

export function useGetActionRestoreDBClusterFromSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
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
        ? getGetActionRestoreDBClusterFromSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBClusterFromSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRestoreDBClusterFromSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
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
        ? getGetActionRestoreDBClusterFromSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBClusterFromSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRestoreDBClusterFromSnapshotKey() {
  return [
    '#Action=RestoreDBClusterFromSnapshot',
    '/#Action=RestoreDBClusterFromSnapshot',
    'POST',
  ] as const
}

export function usePostActionRestoreDBClusterFromSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestoreDBClusterFromSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>
        },
      ) => parseResponse(client['#Action=RestoreDBClusterFromSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRestoreDBClusterToPointInTimeKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreDBClusterToPointInTime',
    '/#Action=RestoreDBClusterToPointInTime',
    keyArgs,
  ] as const
}

export function useGetActionRestoreDBClusterToPointInTime<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>>
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
        ? getGetActionRestoreDBClusterToPointInTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBClusterToPointInTime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRestoreDBClusterToPointInTime<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>>
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
        ? getGetActionRestoreDBClusterToPointInTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBClusterToPointInTime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRestoreDBClusterToPointInTimeKey() {
  return [
    '#Action=RestoreDBClusterToPointInTime',
    '/#Action=RestoreDBClusterToPointInTime',
    'POST',
  ] as const
}

export function usePostActionRestoreDBClusterToPointInTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestoreDBClusterToPointInTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>
        },
      ) => parseResponse(client['#Action=RestoreDBClusterToPointInTime'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRestoreDBInstanceFromDBSnapshotKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreDBInstanceFromDBSnapshot',
    '/#Action=RestoreDBInstanceFromDBSnapshot',
    keyArgs,
  ] as const
}

export function useGetActionRestoreDBInstanceFromDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>>
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
        ? getGetActionRestoreDBInstanceFromDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBInstanceFromDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRestoreDBInstanceFromDBSnapshot<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>>
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
        ? getGetActionRestoreDBInstanceFromDBSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBInstanceFromDBSnapshot'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRestoreDBInstanceFromDBSnapshotKey() {
  return [
    '#Action=RestoreDBInstanceFromDBSnapshot',
    '/#Action=RestoreDBInstanceFromDBSnapshot',
    'POST',
  ] as const
}

export function usePostActionRestoreDBInstanceFromDBSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestoreDBInstanceFromDBSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>
        },
      ) =>
        parseResponse(client['#Action=RestoreDBInstanceFromDBSnapshot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRestoreDBInstanceFromS3Key(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RestoreDBInstanceFromS3', '/#Action=RestoreDBInstanceFromS3', keyArgs] as const
}

export function useGetActionRestoreDBInstanceFromS3<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
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
        ? getGetActionRestoreDBInstanceFromS3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBInstanceFromS3'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRestoreDBInstanceFromS3<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
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
        ? getGetActionRestoreDBInstanceFromS3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBInstanceFromS3'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRestoreDBInstanceFromS3Key() {
  return ['#Action=RestoreDBInstanceFromS3', '/#Action=RestoreDBInstanceFromS3', 'POST'] as const
}

export function usePostActionRestoreDBInstanceFromS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestoreDBInstanceFromS3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']> },
      ) => parseResponse(client['#Action=RestoreDBInstanceFromS3'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRestoreDBInstanceToPointInTimeKey(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RestoreDBInstanceToPointInTime',
    '/#Action=RestoreDBInstanceToPointInTime',
    keyArgs,
  ] as const
}

export function useGetActionRestoreDBInstanceToPointInTime<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>>
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
        ? getGetActionRestoreDBInstanceToPointInTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBInstanceToPointInTime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRestoreDBInstanceToPointInTime<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>>
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
        ? getGetActionRestoreDBInstanceToPointInTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RestoreDBInstanceToPointInTime'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRestoreDBInstanceToPointInTimeKey() {
  return [
    '#Action=RestoreDBInstanceToPointInTime',
    '/#Action=RestoreDBInstanceToPointInTime',
    'POST',
  ] as const
}

export function usePostActionRestoreDBInstanceToPointInTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestoreDBInstanceToPointInTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>
        },
      ) =>
        parseResponse(client['#Action=RestoreDBInstanceToPointInTime'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRevokeDBSecurityGroupIngressKey(
  args: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=RevokeDBSecurityGroupIngress',
    '/#Action=RevokeDBSecurityGroupIngress',
    keyArgs,
  ] as const
}

export function useGetActionRevokeDBSecurityGroupIngress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
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
        ? getGetActionRevokeDBSecurityGroupIngressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RevokeDBSecurityGroupIngress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRevokeDBSecurityGroupIngress<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
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
        ? getGetActionRevokeDBSecurityGroupIngressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=RevokeDBSecurityGroupIngress'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRevokeDBSecurityGroupIngressKey() {
  return [
    '#Action=RevokeDBSecurityGroupIngress',
    '/#Action=RevokeDBSecurityGroupIngress',
    'POST',
  ] as const
}

export function usePostActionRevokeDBSecurityGroupIngress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRevokeDBSecurityGroupIngressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>
        },
      ) => parseResponse(client['#Action=RevokeDBSecurityGroupIngress'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStartActivityStreamKey(
  args: InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartActivityStream', '/#Action=StartActivityStream', keyArgs] as const
}

export function useGetActionStartActivityStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
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
        ? getGetActionStartActivityStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartActivityStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStartActivityStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
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
        ? getGetActionStartActivityStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartActivityStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStartActivityStreamKey() {
  return ['#Action=StartActivityStream', '/#Action=StartActivityStream', 'POST'] as const
}

export function usePostActionStartActivityStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartActivityStream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StartActivityStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStartActivityStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StartActivityStream']['$post']> },
      ) => parseResponse(client['#Action=StartActivityStream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStartDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartDBCluster', '/#Action=StartDBCluster', keyArgs] as const
}

export function useGetActionStartDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>
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
        ? getGetActionStartDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStartDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>
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
        ? getGetActionStartDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStartDBClusterKey() {
  return ['#Action=StartDBCluster', '/#Action=StartDBCluster', 'POST'] as const
}

export function usePostActionStartDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartDBCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StartDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStartDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StartDBCluster']['$post']> },
      ) => parseResponse(client['#Action=StartDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStartDBInstanceKey(
  args: InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartDBInstance', '/#Action=StartDBInstance', keyArgs] as const
}

export function useGetActionStartDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>
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
        ? getGetActionStartDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStartDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>
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
        ? getGetActionStartDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStartDBInstanceKey() {
  return ['#Action=StartDBInstance', '/#Action=StartDBInstance', 'POST'] as const
}

export function usePostActionStartDBInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartDBInstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StartDBInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStartDBInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StartDBInstance']['$post']> },
      ) => parseResponse(client['#Action=StartDBInstance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStartDBInstanceAutomatedBackupsReplicationKey(
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

export function useGetActionStartDBInstanceAutomatedBackupsReplication<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetActionStartDBInstanceAutomatedBackupsReplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=StartDBInstanceAutomatedBackupsReplication'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStartDBInstanceAutomatedBackupsReplication<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetActionStartDBInstanceAutomatedBackupsReplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=StartDBInstanceAutomatedBackupsReplication'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionStartDBInstanceAutomatedBackupsReplicationKey() {
  return [
    '#Action=StartDBInstanceAutomatedBackupsReplication',
    '/#Action=StartDBInstanceAutomatedBackupsReplication',
    'POST',
  ] as const
}

export function usePostActionStartDBInstanceAutomatedBackupsReplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStartDBInstanceAutomatedBackupsReplicationKey()
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
            (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=StartDBInstanceAutomatedBackupsReplication'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionStartExportTaskKey(
  args: InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StartExportTask', '/#Action=StartExportTask', keyArgs] as const
}

export function useGetActionStartExportTask<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>
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
        ? getGetActionStartExportTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartExportTask'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStartExportTask<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>
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
        ? getGetActionStartExportTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StartExportTask'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStartExportTaskKey() {
  return ['#Action=StartExportTask', '/#Action=StartExportTask', 'POST'] as const
}

export function usePostActionStartExportTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StartExportTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StartExportTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStartExportTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StartExportTask']['$post']> },
      ) => parseResponse(client['#Action=StartExportTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStopActivityStreamKey(
  args: InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopActivityStream', '/#Action=StopActivityStream', keyArgs] as const
}

export function useGetActionStopActivityStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
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
        ? getGetActionStopActivityStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StopActivityStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStopActivityStream<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
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
        ? getGetActionStopActivityStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StopActivityStream'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStopActivityStreamKey() {
  return ['#Action=StopActivityStream', '/#Action=StopActivityStream', 'POST'] as const
}

export function usePostActionStopActivityStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopActivityStream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StopActivityStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStopActivityStreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StopActivityStream']['$post']> },
      ) => parseResponse(client['#Action=StopActivityStream'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStopDBClusterKey(
  args: InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopDBCluster', '/#Action=StopDBCluster', keyArgs] as const
}

export function useGetActionStopDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>
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
        ? getGetActionStopDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StopDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStopDBCluster<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>
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
        ? getGetActionStopDBClusterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StopDBCluster'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStopDBClusterKey() {
  return ['#Action=StopDBCluster', '/#Action=StopDBCluster', 'POST'] as const
}

export function usePostActionStopDBCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=StopDBCluster']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StopDBCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStopDBClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StopDBCluster']['$post']> },
      ) => parseResponse(client['#Action=StopDBCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStopDBInstanceKey(
  args: InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=StopDBInstance', '/#Action=StopDBInstance', keyArgs] as const
}

export function useGetActionStopDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>
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
        ? getGetActionStopDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StopDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStopDBInstance<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>
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
        ? getGetActionStopDBInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=StopDBInstance'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionStopDBInstanceKey() {
  return ['#Action=StopDBInstance', '/#Action=StopDBInstance', 'POST'] as const
}

export function usePostActionStopDBInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=StopDBInstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=StopDBInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStopDBInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=StopDBInstance']['$post']> },
      ) => parseResponse(client['#Action=StopDBInstance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionStopDBInstanceAutomatedBackupsReplicationKey(
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

export function useGetActionStopDBInstanceAutomatedBackupsReplication<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetActionStopDBInstanceAutomatedBackupsReplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=StopDBInstanceAutomatedBackupsReplication'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionStopDBInstanceAutomatedBackupsReplication<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetActionStopDBInstanceAutomatedBackupsReplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=StopDBInstanceAutomatedBackupsReplication'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionStopDBInstanceAutomatedBackupsReplicationKey() {
  return [
    '#Action=StopDBInstanceAutomatedBackupsReplication',
    '/#Action=StopDBInstanceAutomatedBackupsReplication',
    'POST',
  ] as const
}

export function usePostActionStopDBInstanceAutomatedBackupsReplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionStopDBInstanceAutomatedBackupsReplicationKey()
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
            (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=StopDBInstanceAutomatedBackupsReplication'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionSwitchoverBlueGreenDeploymentKey(
  args: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SwitchoverBlueGreenDeployment',
    '/#Action=SwitchoverBlueGreenDeployment',
    keyArgs,
  ] as const
}

export function useGetActionSwitchoverBlueGreenDeployment<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>>
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
        ? getGetActionSwitchoverBlueGreenDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SwitchoverBlueGreenDeployment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSwitchoverBlueGreenDeployment<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>>
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
        ? getGetActionSwitchoverBlueGreenDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SwitchoverBlueGreenDeployment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSwitchoverBlueGreenDeploymentKey() {
  return [
    '#Action=SwitchoverBlueGreenDeployment',
    '/#Action=SwitchoverBlueGreenDeployment',
    'POST',
  ] as const
}

export function usePostActionSwitchoverBlueGreenDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSwitchoverBlueGreenDeploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>
        },
      ) => parseResponse(client['#Action=SwitchoverBlueGreenDeployment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSwitchoverReadReplicaKey(
  args: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SwitchoverReadReplica', '/#Action=SwitchoverReadReplica', keyArgs] as const
}

export function useGetActionSwitchoverReadReplica<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
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
        ? getGetActionSwitchoverReadReplicaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SwitchoverReadReplica'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSwitchoverReadReplica<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
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
        ? getGetActionSwitchoverReadReplicaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SwitchoverReadReplica'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSwitchoverReadReplicaKey() {
  return ['#Action=SwitchoverReadReplica', '/#Action=SwitchoverReadReplica', 'POST'] as const
}

export function usePostActionSwitchoverReadReplica<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSwitchoverReadReplicaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$post']> },
      ) => parseResponse(client['#Action=SwitchoverReadReplica'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
