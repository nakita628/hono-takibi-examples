import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAddSourceIdentifierToSubscription(
  args: InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AddSourceIdentifierToSubscription'].$get(args, options),
  )
}

export async function postActionAddSourceIdentifierToSubscription(
  args: InferRequestType<(typeof client)['#Action=AddSourceIdentifierToSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AddSourceIdentifierToSubscription'].$post(args, options),
  )
}

export async function getActionAddTagsToResource(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddTagsToResource'].$get(args, options))
}

export async function postActionAddTagsToResource(
  args: InferRequestType<(typeof client)['#Action=AddTagsToResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddTagsToResource'].$post(args, options))
}

export async function getActionApplyPendingMaintenanceAction(
  args: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ApplyPendingMaintenanceAction'].$get(args, options))
}

export async function postActionApplyPendingMaintenanceAction(
  args: InferRequestType<(typeof client)['#Action=ApplyPendingMaintenanceAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ApplyPendingMaintenanceAction'].$post(args, options))
}

export async function getActionCopyDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyDBClusterParameterGroup'].$get(args, options))
}

export async function postActionCopyDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyDBClusterParameterGroup'].$post(args, options))
}

export async function getActionCopyDBClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyDBClusterSnapshot'].$get(args, options))
}

export async function postActionCopyDBClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=CopyDBClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyDBClusterSnapshot'].$post(args, options))
}

export async function getActionCreateDBCluster(
  args: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBCluster'].$get(args, options))
}

export async function postActionCreateDBCluster(
  args: InferRequestType<(typeof client)['#Action=CreateDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBCluster'].$post(args, options))
}

export async function getActionCreateDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBClusterParameterGroup'].$get(args, options))
}

export async function postActionCreateDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBClusterParameterGroup'].$post(args, options))
}

export async function getActionCreateDBClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBClusterSnapshot'].$get(args, options))
}

export async function postActionCreateDBClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBClusterSnapshot'].$post(args, options))
}

export async function getActionCreateDBInstance(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBInstance'].$get(args, options))
}

export async function postActionCreateDBInstance(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBInstance'].$post(args, options))
}

export async function getActionCreateDBSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBSubnetGroup'].$get(args, options))
}

export async function postActionCreateDBSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=CreateDBSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBSubnetGroup'].$post(args, options))
}

export async function getActionCreateEventSubscription(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEventSubscription'].$get(args, options))
}

export async function postActionCreateEventSubscription(
  args: InferRequestType<(typeof client)['#Action=CreateEventSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEventSubscription'].$post(args, options))
}

export async function getActionCreateGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateGlobalCluster'].$get(args, options))
}

export async function postActionCreateGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateGlobalCluster'].$post(args, options))
}

export async function getActionDeleteDBCluster(
  args: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBCluster'].$get(args, options))
}

export async function postActionDeleteDBCluster(
  args: InferRequestType<(typeof client)['#Action=DeleteDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBCluster'].$post(args, options))
}

export async function getActionDeleteDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBClusterParameterGroup'].$get(args, options))
}

export async function postActionDeleteDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBClusterParameterGroup'].$post(args, options))
}

export async function getActionDeleteDBClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBClusterSnapshot'].$get(args, options))
}

export async function postActionDeleteDBClusterSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBClusterSnapshot'].$post(args, options))
}

export async function getActionDeleteDBInstance(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBInstance'].$get(args, options))
}

export async function postActionDeleteDBInstance(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBInstance'].$post(args, options))
}

export async function getActionDeleteDBSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBSubnetGroup'].$get(args, options))
}

export async function postActionDeleteDBSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBSubnetGroup'].$post(args, options))
}

export async function getActionDeleteEventSubscription(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEventSubscription'].$get(args, options))
}

export async function postActionDeleteEventSubscription(
  args: InferRequestType<(typeof client)['#Action=DeleteEventSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEventSubscription'].$post(args, options))
}

export async function getActionDeleteGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteGlobalCluster'].$get(args, options))
}

export async function postActionDeleteGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteGlobalCluster'].$post(args, options))
}

export async function getActionDescribeCertificates(
  args: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCertificates'].$get(args, options))
}

export async function postActionDescribeCertificates(
  args: InferRequestType<(typeof client)['#Action=DescribeCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCertificates'].$post(args, options))
}

export async function getActionDescribeDBClusterParameterGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterParameterGroups'].$get(args, options))
}

export async function postActionDescribeDBClusterParameterGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameterGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeDBClusterParameterGroups'].$post(args, options),
  )
}

export async function getActionDescribeDBClusterParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterParameters'].$get(args, options))
}

export async function postActionDescribeDBClusterParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterParameters'].$post(args, options))
}

export async function getActionDescribeDBClusterSnapshotAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeDBClusterSnapshotAttributes'].$get(args, options),
  )
}

export async function postActionDescribeDBClusterSnapshotAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshotAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeDBClusterSnapshotAttributes'].$post(args, options),
  )
}

export async function getActionDescribeDBClusterSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterSnapshots'].$get(args, options))
}

export async function postActionDescribeDBClusterSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterSnapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterSnapshots'].$post(args, options))
}

export async function getActionDescribeDBClusters(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusters'].$get(args, options))
}

export async function postActionDescribeDBClusters(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusters'].$post(args, options))
}

export async function getActionDescribeDBEngineVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBEngineVersions'].$get(args, options))
}

export async function postActionDescribeDBEngineVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeDBEngineVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBEngineVersions'].$post(args, options))
}

export async function getActionDescribeDBInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBInstances'].$get(args, options))
}

export async function postActionDescribeDBInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBInstances'].$post(args, options))
}

export async function getActionDescribeDBSubnetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBSubnetGroups'].$get(args, options))
}

export async function postActionDescribeDBSubnetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSubnetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBSubnetGroups'].$post(args, options))
}

export async function getActionDescribeEngineDefaultClusterParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeEngineDefaultClusterParameters'].$get(args, options),
  )
}

export async function postActionDescribeEngineDefaultClusterParameters(
  args: InferRequestType<
    (typeof client)['#Action=DescribeEngineDefaultClusterParameters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeEngineDefaultClusterParameters'].$post(args, options),
  )
}

export async function getActionDescribeEventCategories(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEventCategories'].$get(args, options))
}

export async function postActionDescribeEventCategories(
  args: InferRequestType<(typeof client)['#Action=DescribeEventCategories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEventCategories'].$post(args, options))
}

export async function getActionDescribeEventSubscriptions(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEventSubscriptions'].$get(args, options))
}

export async function postActionDescribeEventSubscriptions(
  args: InferRequestType<(typeof client)['#Action=DescribeEventSubscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEventSubscriptions'].$post(args, options))
}

export async function getActionDescribeEvents(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEvents'].$get(args, options))
}

export async function postActionDescribeEvents(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEvents'].$post(args, options))
}

export async function getActionDescribeGlobalClusters(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeGlobalClusters'].$get(args, options))
}

export async function postActionDescribeGlobalClusters(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalClusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeGlobalClusters'].$post(args, options))
}

export async function getActionDescribeOrderableDBInstanceOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeOrderableDBInstanceOptions'].$get(args, options),
  )
}

export async function postActionDescribeOrderableDBInstanceOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeOrderableDBInstanceOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeOrderableDBInstanceOptions'].$post(args, options),
  )
}

export async function getActionDescribePendingMaintenanceActions(
  args: InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribePendingMaintenanceActions'].$get(args, options),
  )
}

export async function postActionDescribePendingMaintenanceActions(
  args: InferRequestType<(typeof client)['#Action=DescribePendingMaintenanceActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribePendingMaintenanceActions'].$post(args, options),
  )
}

export async function getActionFailoverDBCluster(
  args: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=FailoverDBCluster'].$get(args, options))
}

export async function postActionFailoverDBCluster(
  args: InferRequestType<(typeof client)['#Action=FailoverDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=FailoverDBCluster'].$post(args, options))
}

export async function getActionListTagsForResource(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTagsForResource'].$get(args, options))
}

export async function postActionListTagsForResource(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTagsForResource'].$post(args, options))
}

export async function getActionModifyDBCluster(
  args: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBCluster'].$get(args, options))
}

export async function postActionModifyDBCluster(
  args: InferRequestType<(typeof client)['#Action=ModifyDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBCluster'].$post(args, options))
}

export async function getActionModifyDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBClusterParameterGroup'].$get(args, options))
}

export async function postActionModifyDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBClusterParameterGroup'].$post(args, options))
}

export async function getActionModifyDBClusterSnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBClusterSnapshotAttribute'].$get(args, options))
}

export async function postActionModifyDBClusterSnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterSnapshotAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyDBClusterSnapshotAttribute'].$post(args, options),
  )
}

export async function getActionModifyDBInstance(
  args: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBInstance'].$get(args, options))
}

export async function postActionModifyDBInstance(
  args: InferRequestType<(typeof client)['#Action=ModifyDBInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBInstance'].$post(args, options))
}

export async function getActionModifyDBSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBSubnetGroup'].$get(args, options))
}

export async function postActionModifyDBSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBSubnetGroup'].$post(args, options))
}

export async function getActionModifyEventSubscription(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyEventSubscription'].$get(args, options))
}

export async function postActionModifyEventSubscription(
  args: InferRequestType<(typeof client)['#Action=ModifyEventSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyEventSubscription'].$post(args, options))
}

export async function getActionModifyGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyGlobalCluster'].$get(args, options))
}

export async function postActionModifyGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyGlobalCluster'].$post(args, options))
}

export async function getActionRebootDBInstance(
  args: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootDBInstance'].$get(args, options))
}

export async function postActionRebootDBInstance(
  args: InferRequestType<(typeof client)['#Action=RebootDBInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootDBInstance'].$post(args, options))
}

export async function getActionRemoveFromGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveFromGlobalCluster'].$get(args, options))
}

export async function postActionRemoveFromGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=RemoveFromGlobalCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveFromGlobalCluster'].$post(args, options))
}

export async function getActionRemoveSourceIdentifierFromSubscription(
  args: InferRequestType<(typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RemoveSourceIdentifierFromSubscription'].$get(args, options),
  )
}

export async function postActionRemoveSourceIdentifierFromSubscription(
  args: InferRequestType<
    (typeof client)['#Action=RemoveSourceIdentifierFromSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RemoveSourceIdentifierFromSubscription'].$post(args, options),
  )
}

export async function getActionRemoveTagsFromResource(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveTagsFromResource'].$get(args, options))
}

export async function postActionRemoveTagsFromResource(
  args: InferRequestType<(typeof client)['#Action=RemoveTagsFromResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveTagsFromResource'].$post(args, options))
}

export async function getActionResetDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetDBClusterParameterGroup'].$get(args, options))
}

export async function postActionResetDBClusterParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ResetDBClusterParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetDBClusterParameterGroup'].$post(args, options))
}

export async function getActionRestoreDBClusterFromSnapshot(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBClusterFromSnapshot'].$get(args, options))
}

export async function postActionRestoreDBClusterFromSnapshot(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBClusterFromSnapshot'].$post(args, options))
}

export async function getActionRestoreDBClusterToPointInTime(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBClusterToPointInTime'].$get(args, options))
}

export async function postActionRestoreDBClusterToPointInTime(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterToPointInTime']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBClusterToPointInTime'].$post(args, options))
}

export async function getActionStartDBCluster(
  args: InferRequestType<(typeof client)['#Action=StartDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartDBCluster'].$get(args, options))
}

export async function postActionStartDBCluster(
  args: InferRequestType<(typeof client)['#Action=StartDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartDBCluster'].$post(args, options))
}

export async function getActionStopDBCluster(
  args: InferRequestType<(typeof client)['#Action=StopDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopDBCluster'].$get(args, options))
}

export async function postActionStopDBCluster(
  args: InferRequestType<(typeof client)['#Action=StopDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopDBCluster'].$post(args, options))
}
