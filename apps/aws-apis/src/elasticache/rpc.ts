import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function getActionAuthorizeCacheSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AuthorizeCacheSecurityGroupIngress'].$get(args, options),
  )
}

export async function postActionAuthorizeCacheSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeCacheSecurityGroupIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AuthorizeCacheSecurityGroupIngress'].$post(args, options),
  )
}

export async function getActionBatchApplyUpdateAction(
  args: InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchApplyUpdateAction'].$get(args, options))
}

export async function postActionBatchApplyUpdateAction(
  args: InferRequestType<(typeof client)['#Action=BatchApplyUpdateAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchApplyUpdateAction'].$post(args, options))
}

export async function getActionBatchStopUpdateAction(
  args: InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchStopUpdateAction'].$get(args, options))
}

export async function postActionBatchStopUpdateAction(
  args: InferRequestType<(typeof client)['#Action=BatchStopUpdateAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchStopUpdateAction'].$post(args, options))
}

export async function getActionCompleteMigration(
  args: InferRequestType<(typeof client)['#Action=CompleteMigration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CompleteMigration'].$get(args, options))
}

export async function postActionCompleteMigration(
  args: InferRequestType<(typeof client)['#Action=CompleteMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CompleteMigration'].$post(args, options))
}

export async function getActionCopySnapshot(
  args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopySnapshot'].$get(args, options))
}

export async function postActionCopySnapshot(
  args: InferRequestType<(typeof client)['#Action=CopySnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopySnapshot'].$post(args, options))
}

export async function getActionCreateCacheCluster(
  args: InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCacheCluster'].$get(args, options))
}

export async function postActionCreateCacheCluster(
  args: InferRequestType<(typeof client)['#Action=CreateCacheCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCacheCluster'].$post(args, options))
}

export async function getActionCreateCacheParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCacheParameterGroup'].$get(args, options))
}

export async function postActionCreateCacheParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CreateCacheParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCacheParameterGroup'].$post(args, options))
}

export async function getActionCreateCacheSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCacheSecurityGroup'].$get(args, options))
}

export async function postActionCreateCacheSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSecurityGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCacheSecurityGroup'].$post(args, options))
}

export async function getActionCreateCacheSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCacheSubnetGroup'].$get(args, options))
}

export async function postActionCreateCacheSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=CreateCacheSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCacheSubnetGroup'].$post(args, options))
}

export async function getActionCreateGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateGlobalReplicationGroup'].$get(args, options))
}

export async function postActionCreateGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=CreateGlobalReplicationGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateGlobalReplicationGroup'].$post(args, options))
}

export async function getActionCreateReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReplicationGroup'].$get(args, options))
}

export async function postActionCreateReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=CreateReplicationGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReplicationGroup'].$post(args, options))
}

export async function getActionCreateSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshot'].$get(args, options))
}

export async function postActionCreateSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSnapshot'].$post(args, options))
}

export async function getActionCreateUser(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateUser'].$get(args, options))
}

export async function postActionCreateUser(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateUser'].$post(args, options))
}

export async function getActionCreateUserGroup(
  args: InferRequestType<(typeof client)['#Action=CreateUserGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateUserGroup'].$get(args, options))
}

export async function postActionCreateUserGroup(
  args: InferRequestType<(typeof client)['#Action=CreateUserGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateUserGroup'].$post(args, options))
}

export async function getActionDecreaseNodeGroupsInGlobalReplicationGroup(
  args: InferRequestType<
    (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DecreaseNodeGroupsInGlobalReplicationGroup'].$get(args, options),
  )
}

export async function postActionDecreaseNodeGroupsInGlobalReplicationGroup(
  args: InferRequestType<
    (typeof client)['#Action=DecreaseNodeGroupsInGlobalReplicationGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DecreaseNodeGroupsInGlobalReplicationGroup'].$post(args, options),
  )
}

export async function getActionDecreaseReplicaCount(
  args: InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DecreaseReplicaCount'].$get(args, options))
}

export async function postActionDecreaseReplicaCount(
  args: InferRequestType<(typeof client)['#Action=DecreaseReplicaCount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DecreaseReplicaCount'].$post(args, options))
}

export async function getActionDeleteCacheCluster(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCacheCluster'].$get(args, options))
}

export async function postActionDeleteCacheCluster(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCacheCluster'].$post(args, options))
}

export async function getActionDeleteCacheParameterGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCacheParameterGroup'].$get(args, options))
}

export async function postActionDeleteCacheParameterGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCacheParameterGroup'].$post(args, options))
}

export async function getActionDeleteCacheSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCacheSecurityGroup'].$get(args, options))
}

export async function postActionDeleteCacheSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSecurityGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCacheSecurityGroup'].$post(args, options))
}

export async function getActionDeleteCacheSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCacheSubnetGroup'].$get(args, options))
}

export async function postActionDeleteCacheSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteCacheSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCacheSubnetGroup'].$post(args, options))
}

export async function getActionDeleteGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteGlobalReplicationGroup'].$get(args, options))
}

export async function postActionDeleteGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteGlobalReplicationGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteGlobalReplicationGroup'].$post(args, options))
}

export async function getActionDeleteReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteReplicationGroup'].$get(args, options))
}

export async function postActionDeleteReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteReplicationGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteReplicationGroup'].$post(args, options))
}

export async function getActionDeleteSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSnapshot'].$get(args, options))
}

export async function postActionDeleteSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSnapshot'].$post(args, options))
}

export async function getActionDeleteUser(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUser'].$get(args, options))
}

export async function postActionDeleteUser(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUser'].$post(args, options))
}

export async function getActionDeleteUserGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUserGroup'].$get(args, options))
}

export async function postActionDeleteUserGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteUserGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUserGroup'].$post(args, options))
}

export async function getActionDescribeCacheClusters(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheClusters'].$get(args, options))
}

export async function postActionDescribeCacheClusters(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheClusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheClusters'].$post(args, options))
}

export async function getActionDescribeCacheEngineVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheEngineVersions'].$get(args, options))
}

export async function postActionDescribeCacheEngineVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheEngineVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheEngineVersions'].$post(args, options))
}

export async function getActionDescribeCacheParameterGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheParameterGroups'].$get(args, options))
}

export async function postActionDescribeCacheParameterGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameterGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheParameterGroups'].$post(args, options))
}

export async function getActionDescribeCacheParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheParameters'].$get(args, options))
}

export async function postActionDescribeCacheParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheParameters'].$post(args, options))
}

export async function getActionDescribeCacheSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheSecurityGroups'].$get(args, options))
}

export async function postActionDescribeCacheSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSecurityGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheSecurityGroups'].$post(args, options))
}

export async function getActionDescribeCacheSubnetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheSubnetGroups'].$get(args, options))
}

export async function postActionDescribeCacheSubnetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeCacheSubnetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeCacheSubnetGroups'].$post(args, options))
}

export async function getActionDescribeEngineDefaultParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEngineDefaultParameters'].$get(args, options))
}

export async function postActionDescribeEngineDefaultParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeEngineDefaultParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEngineDefaultParameters'].$post(args, options))
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

export async function getActionDescribeGlobalReplicationGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeGlobalReplicationGroups'].$get(args, options))
}

export async function postActionDescribeGlobalReplicationGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeGlobalReplicationGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeGlobalReplicationGroups'].$post(args, options))
}

export async function getActionDescribeReplicationGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReplicationGroups'].$get(args, options))
}

export async function postActionDescribeReplicationGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeReplicationGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReplicationGroups'].$post(args, options))
}

export async function getActionDescribeReservedCacheNodes(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedCacheNodes'].$get(args, options))
}

export async function postActionDescribeReservedCacheNodes(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedCacheNodes'].$post(args, options))
}

export async function getActionDescribeReservedCacheNodesOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedCacheNodesOfferings'].$get(args, options),
  )
}

export async function postActionDescribeReservedCacheNodesOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedCacheNodesOfferings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedCacheNodesOfferings'].$post(args, options),
  )
}

export async function getActionDescribeServiceUpdates(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeServiceUpdates'].$get(args, options))
}

export async function postActionDescribeServiceUpdates(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceUpdates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeServiceUpdates'].$post(args, options))
}

export async function getActionDescribeSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshots'].$get(args, options))
}

export async function postActionDescribeSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeSnapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSnapshots'].$post(args, options))
}

export async function getActionDescribeUpdateActions(
  args: InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeUpdateActions'].$get(args, options))
}

export async function postActionDescribeUpdateActions(
  args: InferRequestType<(typeof client)['#Action=DescribeUpdateActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeUpdateActions'].$post(args, options))
}

export async function getActionDescribeUserGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeUserGroups'].$get(args, options))
}

export async function postActionDescribeUserGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeUserGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeUserGroups'].$post(args, options))
}

export async function getActionDescribeUsers(
  args: InferRequestType<(typeof client)['#Action=DescribeUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeUsers'].$get(args, options))
}

export async function postActionDescribeUsers(
  args: InferRequestType<(typeof client)['#Action=DescribeUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeUsers'].$post(args, options))
}

export async function getActionDisassociateGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateGlobalReplicationGroup'].$get(args, options),
  )
}

export async function postActionDisassociateGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=DisassociateGlobalReplicationGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateGlobalReplicationGroup'].$post(args, options),
  )
}

export async function getActionFailoverGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=FailoverGlobalReplicationGroup'].$get(args, options))
}

export async function postActionFailoverGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalReplicationGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=FailoverGlobalReplicationGroup'].$post(args, options))
}

export async function getActionIncreaseNodeGroupsInGlobalReplicationGroup(
  args: InferRequestType<
    (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=IncreaseNodeGroupsInGlobalReplicationGroup'].$get(args, options),
  )
}

export async function postActionIncreaseNodeGroupsInGlobalReplicationGroup(
  args: InferRequestType<
    (typeof client)['#Action=IncreaseNodeGroupsInGlobalReplicationGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=IncreaseNodeGroupsInGlobalReplicationGroup'].$post(args, options),
  )
}

export async function getActionIncreaseReplicaCount(
  args: InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=IncreaseReplicaCount'].$get(args, options))
}

export async function postActionIncreaseReplicaCount(
  args: InferRequestType<(typeof client)['#Action=IncreaseReplicaCount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=IncreaseReplicaCount'].$post(args, options))
}

export async function getActionListAllowedNodeTypeModifications(
  args: InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAllowedNodeTypeModifications'].$get(args, options))
}

export async function postActionListAllowedNodeTypeModifications(
  args: InferRequestType<(typeof client)['#Action=ListAllowedNodeTypeModifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ListAllowedNodeTypeModifications'].$post(args, options),
  )
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

export async function getActionModifyCacheCluster(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCacheCluster'].$get(args, options))
}

export async function postActionModifyCacheCluster(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCacheCluster'].$post(args, options))
}

export async function getActionModifyCacheParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCacheParameterGroup'].$get(args, options))
}

export async function postActionModifyCacheParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCacheParameterGroup'].$post(args, options))
}

export async function getActionModifyCacheSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCacheSubnetGroup'].$get(args, options))
}

export async function postActionModifyCacheSubnetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyCacheSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCacheSubnetGroup'].$post(args, options))
}

export async function getActionModifyGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyGlobalReplicationGroup'].$get(args, options))
}

export async function postActionModifyGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyGlobalReplicationGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyGlobalReplicationGroup'].$post(args, options))
}

export async function getActionModifyReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyReplicationGroup'].$get(args, options))
}

export async function postActionModifyReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyReplicationGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyReplicationGroup'].$post(args, options))
}

export async function getActionModifyReplicationGroupShardConfiguration(
  args: InferRequestType<
    (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyReplicationGroupShardConfiguration'].$get(args, options),
  )
}

export async function postActionModifyReplicationGroupShardConfiguration(
  args: InferRequestType<
    (typeof client)['#Action=ModifyReplicationGroupShardConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ModifyReplicationGroupShardConfiguration'].$post(args, options),
  )
}

export async function getActionModifyUser(
  args: InferRequestType<(typeof client)['#Action=ModifyUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyUser'].$get(args, options))
}

export async function postActionModifyUser(
  args: InferRequestType<(typeof client)['#Action=ModifyUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyUser'].$post(args, options))
}

export async function getActionModifyUserGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyUserGroup'].$get(args, options))
}

export async function postActionModifyUserGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyUserGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyUserGroup'].$post(args, options))
}

export async function getActionPurchaseReservedCacheNodesOffering(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=PurchaseReservedCacheNodesOffering'].$get(args, options),
  )
}

export async function postActionPurchaseReservedCacheNodesOffering(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedCacheNodesOffering']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=PurchaseReservedCacheNodesOffering'].$post(args, options),
  )
}

export async function getActionRebalanceSlotsInGlobalReplicationGroup(
  args: InferRequestType<(typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RebalanceSlotsInGlobalReplicationGroup'].$get(args, options),
  )
}

export async function postActionRebalanceSlotsInGlobalReplicationGroup(
  args: InferRequestType<
    (typeof client)['#Action=RebalanceSlotsInGlobalReplicationGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RebalanceSlotsInGlobalReplicationGroup'].$post(args, options),
  )
}

export async function getActionRebootCacheCluster(
  args: InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootCacheCluster'].$get(args, options))
}

export async function postActionRebootCacheCluster(
  args: InferRequestType<(typeof client)['#Action=RebootCacheCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootCacheCluster'].$post(args, options))
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

export async function getActionResetCacheParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetCacheParameterGroup'].$get(args, options))
}

export async function postActionResetCacheParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ResetCacheParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetCacheParameterGroup'].$post(args, options))
}

export async function getActionRevokeCacheSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeCacheSecurityGroupIngress'].$get(args, options))
}

export async function postActionRevokeCacheSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeCacheSecurityGroupIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeCacheSecurityGroupIngress'].$post(args, options))
}

export async function getActionStartMigration(
  args: InferRequestType<(typeof client)['#Action=StartMigration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartMigration'].$get(args, options))
}

export async function postActionStartMigration(
  args: InferRequestType<(typeof client)['#Action=StartMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartMigration'].$post(args, options))
}

export async function getActionTestFailover(
  args: InferRequestType<(typeof client)['#Action=TestFailover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TestFailover'].$get(args, options))
}

export async function postActionTestFailover(
  args: InferRequestType<(typeof client)['#Action=TestFailover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TestFailover'].$post(args, options))
}
