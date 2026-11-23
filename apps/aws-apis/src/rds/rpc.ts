import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAddRoleToDBCluster(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddRoleToDBCluster'].$get(args, options))
}

export async function postActionAddRoleToDBCluster(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddRoleToDBCluster'].$post(args, options))
}

export async function getActionAddRoleToDBInstance(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddRoleToDBInstance'].$get(args, options))
}

export async function postActionAddRoleToDBInstance(
  args: InferRequestType<(typeof client)['#Action=AddRoleToDBInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddRoleToDBInstance'].$post(args, options))
}

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

export async function getActionAuthorizeDBSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeDBSecurityGroupIngress'].$get(args, options))
}

export async function postActionAuthorizeDBSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=AuthorizeDBSecurityGroupIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AuthorizeDBSecurityGroupIngress'].$post(args, options))
}

export async function getActionBacktrackDBCluster(
  args: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BacktrackDBCluster'].$get(args, options))
}

export async function postActionBacktrackDBCluster(
  args: InferRequestType<(typeof client)['#Action=BacktrackDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BacktrackDBCluster'].$post(args, options))
}

export async function getActionCancelExportTask(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelExportTask'].$get(args, options))
}

export async function postActionCancelExportTask(
  args: InferRequestType<(typeof client)['#Action=CancelExportTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelExportTask'].$post(args, options))
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

export async function getActionCopyDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyDBParameterGroup'].$get(args, options))
}

export async function postActionCopyDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CopyDBParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyDBParameterGroup'].$post(args, options))
}

export async function getActionCopyDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyDBSnapshot'].$get(args, options))
}

export async function postActionCopyDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=CopyDBSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyDBSnapshot'].$post(args, options))
}

export async function getActionCopyOptionGroup(
  args: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyOptionGroup'].$get(args, options))
}

export async function postActionCopyOptionGroup(
  args: InferRequestType<(typeof client)['#Action=CopyOptionGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CopyOptionGroup'].$post(args, options))
}

export async function getActionCreateBlueGreenDeployment(
  args: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateBlueGreenDeployment'].$get(args, options))
}

export async function postActionCreateBlueGreenDeployment(
  args: InferRequestType<(typeof client)['#Action=CreateBlueGreenDeployment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateBlueGreenDeployment'].$post(args, options))
}

export async function getActionCreateCustomDBEngineVersion(
  args: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCustomDBEngineVersion'].$get(args, options))
}

export async function postActionCreateCustomDBEngineVersion(
  args: InferRequestType<(typeof client)['#Action=CreateCustomDBEngineVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateCustomDBEngineVersion'].$post(args, options))
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

export async function getActionCreateDBClusterEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBClusterEndpoint'].$get(args, options))
}

export async function postActionCreateDBClusterEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateDBClusterEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBClusterEndpoint'].$post(args, options))
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

export async function getActionCreateDBInstanceReadReplica(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBInstanceReadReplica'].$get(args, options))
}

export async function postActionCreateDBInstanceReadReplica(
  args: InferRequestType<(typeof client)['#Action=CreateDBInstanceReadReplica']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBInstanceReadReplica'].$post(args, options))
}

export async function getActionCreateDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBParameterGroup'].$get(args, options))
}

export async function postActionCreateDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=CreateDBParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBParameterGroup'].$post(args, options))
}

export async function getActionCreateDBProxy(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBProxy'].$get(args, options))
}

export async function postActionCreateDBProxy(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBProxy'].$post(args, options))
}

export async function getActionCreateDBProxyEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBProxyEndpoint'].$get(args, options))
}

export async function postActionCreateDBProxyEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreateDBProxyEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBProxyEndpoint'].$post(args, options))
}

export async function getActionCreateDBSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBSecurityGroup'].$get(args, options))
}

export async function postActionCreateDBSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=CreateDBSecurityGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBSecurityGroup'].$post(args, options))
}

export async function getActionCreateDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBSnapshot'].$get(args, options))
}

export async function postActionCreateDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=CreateDBSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateDBSnapshot'].$post(args, options))
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

export async function getActionCreateOptionGroup(
  args: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateOptionGroup'].$get(args, options))
}

export async function postActionCreateOptionGroup(
  args: InferRequestType<(typeof client)['#Action=CreateOptionGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateOptionGroup'].$post(args, options))
}

export async function getActionDeleteBlueGreenDeployment(
  args: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteBlueGreenDeployment'].$get(args, options))
}

export async function postActionDeleteBlueGreenDeployment(
  args: InferRequestType<(typeof client)['#Action=DeleteBlueGreenDeployment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteBlueGreenDeployment'].$post(args, options))
}

export async function getActionDeleteCustomDBEngineVersion(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCustomDBEngineVersion'].$get(args, options))
}

export async function postActionDeleteCustomDBEngineVersion(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomDBEngineVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteCustomDBEngineVersion'].$post(args, options))
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

export async function getActionDeleteDBClusterAutomatedBackup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBClusterAutomatedBackup'].$get(args, options))
}

export async function postActionDeleteDBClusterAutomatedBackup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterAutomatedBackup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBClusterAutomatedBackup'].$post(args, options))
}

export async function getActionDeleteDBClusterEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBClusterEndpoint'].$get(args, options))
}

export async function postActionDeleteDBClusterEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteDBClusterEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBClusterEndpoint'].$post(args, options))
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

export async function getActionDeleteDBInstanceAutomatedBackup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBInstanceAutomatedBackup'].$get(args, options))
}

export async function postActionDeleteDBInstanceAutomatedBackup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBInstanceAutomatedBackup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBInstanceAutomatedBackup'].$post(args, options))
}

export async function getActionDeleteDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBParameterGroup'].$get(args, options))
}

export async function postActionDeleteDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBParameterGroup'].$post(args, options))
}

export async function getActionDeleteDBProxy(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBProxy'].$get(args, options))
}

export async function postActionDeleteDBProxy(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBProxy'].$post(args, options))
}

export async function getActionDeleteDBProxyEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBProxyEndpoint'].$get(args, options))
}

export async function postActionDeleteDBProxyEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteDBProxyEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBProxyEndpoint'].$post(args, options))
}

export async function getActionDeleteDBSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBSecurityGroup'].$get(args, options))
}

export async function postActionDeleteDBSecurityGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSecurityGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBSecurityGroup'].$post(args, options))
}

export async function getActionDeleteDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBSnapshot'].$get(args, options))
}

export async function postActionDeleteDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=DeleteDBSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteDBSnapshot'].$post(args, options))
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

export async function getActionDeleteOptionGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteOptionGroup'].$get(args, options))
}

export async function postActionDeleteOptionGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteOptionGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteOptionGroup'].$post(args, options))
}

export async function getActionDeregisterDBProxyTargets(
  args: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeregisterDBProxyTargets'].$get(args, options))
}

export async function postActionDeregisterDBProxyTargets(
  args: InferRequestType<(typeof client)['#Action=DeregisterDBProxyTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeregisterDBProxyTargets'].$post(args, options))
}

export async function getActionDescribeAccountAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountAttributes'].$get(args, options))
}

export async function postActionDescribeAccountAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountAttributes'].$post(args, options))
}

export async function getActionDescribeBlueGreenDeployments(
  args: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeBlueGreenDeployments'].$get(args, options))
}

export async function postActionDescribeBlueGreenDeployments(
  args: InferRequestType<(typeof client)['#Action=DescribeBlueGreenDeployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeBlueGreenDeployments'].$post(args, options))
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

export async function getActionDescribeDBClusterAutomatedBackups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeDBClusterAutomatedBackups'].$get(args, options),
  )
}

export async function postActionDescribeDBClusterAutomatedBackups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterAutomatedBackups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeDBClusterAutomatedBackups'].$post(args, options),
  )
}

export async function getActionDescribeDBClusterBacktracks(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterBacktracks'].$get(args, options))
}

export async function postActionDescribeDBClusterBacktracks(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterBacktracks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterBacktracks'].$post(args, options))
}

export async function getActionDescribeDBClusterEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterEndpoints'].$get(args, options))
}

export async function postActionDescribeDBClusterEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeDBClusterEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBClusterEndpoints'].$post(args, options))
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

export async function getActionDescribeDBInstanceAutomatedBackups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeDBInstanceAutomatedBackups'].$get(args, options),
  )
}

export async function postActionDescribeDBInstanceAutomatedBackups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBInstanceAutomatedBackups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeDBInstanceAutomatedBackups'].$post(args, options),
  )
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

export async function getActionDescribeDBLogFiles(
  args: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBLogFiles'].$get(args, options))
}

export async function postActionDescribeDBLogFiles(
  args: InferRequestType<(typeof client)['#Action=DescribeDBLogFiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBLogFiles'].$post(args, options))
}

export async function getActionDescribeDBParameterGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBParameterGroups'].$get(args, options))
}

export async function postActionDescribeDBParameterGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameterGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBParameterGroups'].$post(args, options))
}

export async function getActionDescribeDBParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBParameters'].$get(args, options))
}

export async function postActionDescribeDBParameters(
  args: InferRequestType<(typeof client)['#Action=DescribeDBParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBParameters'].$post(args, options))
}

export async function getActionDescribeDBProxies(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBProxies'].$get(args, options))
}

export async function postActionDescribeDBProxies(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBProxies'].$post(args, options))
}

export async function getActionDescribeDBProxyEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBProxyEndpoints'].$get(args, options))
}

export async function postActionDescribeDBProxyEndpoints(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBProxyEndpoints'].$post(args, options))
}

export async function getActionDescribeDBProxyTargetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBProxyTargetGroups'].$get(args, options))
}

export async function postActionDescribeDBProxyTargetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBProxyTargetGroups'].$post(args, options))
}

export async function getActionDescribeDBProxyTargets(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBProxyTargets'].$get(args, options))
}

export async function postActionDescribeDBProxyTargets(
  args: InferRequestType<(typeof client)['#Action=DescribeDBProxyTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBProxyTargets'].$post(args, options))
}

export async function getActionDescribeDBSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBSecurityGroups'].$get(args, options))
}

export async function postActionDescribeDBSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSecurityGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBSecurityGroups'].$post(args, options))
}

export async function getActionDescribeDBSnapshotAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBSnapshotAttributes'].$get(args, options))
}

export async function postActionDescribeDBSnapshotAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshotAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBSnapshotAttributes'].$post(args, options))
}

export async function getActionDescribeDBSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBSnapshots'].$get(args, options))
}

export async function postActionDescribeDBSnapshots(
  args: InferRequestType<(typeof client)['#Action=DescribeDBSnapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeDBSnapshots'].$post(args, options))
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

export async function getActionDescribeExportTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeExportTasks'].$get(args, options))
}

export async function postActionDescribeExportTasks(
  args: InferRequestType<(typeof client)['#Action=DescribeExportTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeExportTasks'].$post(args, options))
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

export async function getActionDescribeOptionGroupOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeOptionGroupOptions'].$get(args, options))
}

export async function postActionDescribeOptionGroupOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroupOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeOptionGroupOptions'].$post(args, options))
}

export async function getActionDescribeOptionGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeOptionGroups'].$get(args, options))
}

export async function postActionDescribeOptionGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeOptionGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeOptionGroups'].$post(args, options))
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

export async function getActionDescribeReservedDBInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedDBInstances'].$get(args, options))
}

export async function postActionDescribeReservedDBInstances(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReservedDBInstances'].$post(args, options))
}

export async function getActionDescribeReservedDBInstancesOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedDBInstancesOfferings'].$get(args, options),
  )
}

export async function postActionDescribeReservedDBInstancesOfferings(
  args: InferRequestType<(typeof client)['#Action=DescribeReservedDBInstancesOfferings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeReservedDBInstancesOfferings'].$post(args, options),
  )
}

export async function getActionDescribeSourceRegions(
  args: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSourceRegions'].$get(args, options))
}

export async function postActionDescribeSourceRegions(
  args: InferRequestType<(typeof client)['#Action=DescribeSourceRegions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSourceRegions'].$post(args, options))
}

export async function getActionDescribeValidDBInstanceModifications(
  args: InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeValidDBInstanceModifications'].$get(args, options),
  )
}

export async function postActionDescribeValidDBInstanceModifications(
  args: InferRequestType<(typeof client)['#Action=DescribeValidDBInstanceModifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeValidDBInstanceModifications'].$post(args, options),
  )
}

export async function getActionDownloadDBLogFilePortion(
  args: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DownloadDBLogFilePortion'].$get(args, options))
}

export async function postActionDownloadDBLogFilePortion(
  args: InferRequestType<(typeof client)['#Action=DownloadDBLogFilePortion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DownloadDBLogFilePortion'].$post(args, options))
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

export async function getActionFailoverGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=FailoverGlobalCluster'].$get(args, options))
}

export async function postActionFailoverGlobalCluster(
  args: InferRequestType<(typeof client)['#Action=FailoverGlobalCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=FailoverGlobalCluster'].$post(args, options))
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

export async function getActionModifyActivityStream(
  args: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyActivityStream'].$get(args, options))
}

export async function postActionModifyActivityStream(
  args: InferRequestType<(typeof client)['#Action=ModifyActivityStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyActivityStream'].$post(args, options))
}

export async function getActionModifyCertificates(
  args: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCertificates'].$get(args, options))
}

export async function postActionModifyCertificates(
  args: InferRequestType<(typeof client)['#Action=ModifyCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCertificates'].$post(args, options))
}

export async function getActionModifyCurrentDBClusterCapacity(
  args: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCurrentDBClusterCapacity'].$get(args, options))
}

export async function postActionModifyCurrentDBClusterCapacity(
  args: InferRequestType<(typeof client)['#Action=ModifyCurrentDBClusterCapacity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCurrentDBClusterCapacity'].$post(args, options))
}

export async function getActionModifyCustomDBEngineVersion(
  args: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCustomDBEngineVersion'].$get(args, options))
}

export async function postActionModifyCustomDBEngineVersion(
  args: InferRequestType<(typeof client)['#Action=ModifyCustomDBEngineVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyCustomDBEngineVersion'].$post(args, options))
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

export async function getActionModifyDBClusterEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBClusterEndpoint'].$get(args, options))
}

export async function postActionModifyDBClusterEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyDBClusterEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBClusterEndpoint'].$post(args, options))
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

export async function getActionModifyDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBParameterGroup'].$get(args, options))
}

export async function postActionModifyDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyDBParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBParameterGroup'].$post(args, options))
}

export async function getActionModifyDBProxy(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBProxy'].$get(args, options))
}

export async function postActionModifyDBProxy(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBProxy'].$post(args, options))
}

export async function getActionModifyDBProxyEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBProxyEndpoint'].$get(args, options))
}

export async function postActionModifyDBProxyEndpoint(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBProxyEndpoint'].$post(args, options))
}

export async function getActionModifyDBProxyTargetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBProxyTargetGroup'].$get(args, options))
}

export async function postActionModifyDBProxyTargetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyDBProxyTargetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBProxyTargetGroup'].$post(args, options))
}

export async function getActionModifyDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBSnapshot'].$get(args, options))
}

export async function postActionModifyDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBSnapshot'].$post(args, options))
}

export async function getActionModifyDBSnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBSnapshotAttribute'].$get(args, options))
}

export async function postActionModifyDBSnapshotAttribute(
  args: InferRequestType<(typeof client)['#Action=ModifyDBSnapshotAttribute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyDBSnapshotAttribute'].$post(args, options))
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

export async function getActionModifyOptionGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyOptionGroup'].$get(args, options))
}

export async function postActionModifyOptionGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyOptionGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyOptionGroup'].$post(args, options))
}

export async function getActionPromoteReadReplica(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PromoteReadReplica'].$get(args, options))
}

export async function postActionPromoteReadReplica(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplica']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PromoteReadReplica'].$post(args, options))
}

export async function getActionPromoteReadReplicaDBCluster(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PromoteReadReplicaDBCluster'].$get(args, options))
}

export async function postActionPromoteReadReplicaDBCluster(
  args: InferRequestType<(typeof client)['#Action=PromoteReadReplicaDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PromoteReadReplicaDBCluster'].$post(args, options))
}

export async function getActionPurchaseReservedDBInstancesOffering(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=PurchaseReservedDBInstancesOffering'].$get(args, options),
  )
}

export async function postActionPurchaseReservedDBInstancesOffering(
  args: InferRequestType<(typeof client)['#Action=PurchaseReservedDBInstancesOffering']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=PurchaseReservedDBInstancesOffering'].$post(args, options),
  )
}

export async function getActionRebootDBCluster(
  args: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootDBCluster'].$get(args, options))
}

export async function postActionRebootDBCluster(
  args: InferRequestType<(typeof client)['#Action=RebootDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebootDBCluster'].$post(args, options))
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

export async function getActionRegisterDBProxyTargets(
  args: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterDBProxyTargets'].$get(args, options))
}

export async function postActionRegisterDBProxyTargets(
  args: InferRequestType<(typeof client)['#Action=RegisterDBProxyTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterDBProxyTargets'].$post(args, options))
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

export async function getActionRemoveRoleFromDBCluster(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveRoleFromDBCluster'].$get(args, options))
}

export async function postActionRemoveRoleFromDBCluster(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveRoleFromDBCluster'].$post(args, options))
}

export async function getActionRemoveRoleFromDBInstance(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveRoleFromDBInstance'].$get(args, options))
}

export async function postActionRemoveRoleFromDBInstance(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromDBInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveRoleFromDBInstance'].$post(args, options))
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

export async function getActionResetDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetDBParameterGroup'].$get(args, options))
}

export async function postActionResetDBParameterGroup(
  args: InferRequestType<(typeof client)['#Action=ResetDBParameterGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetDBParameterGroup'].$post(args, options))
}

export async function getActionRestoreDBClusterFromS3(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBClusterFromS3'].$get(args, options))
}

export async function postActionRestoreDBClusterFromS3(
  args: InferRequestType<(typeof client)['#Action=RestoreDBClusterFromS3']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBClusterFromS3'].$post(args, options))
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

export async function getActionRestoreDBInstanceFromDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBInstanceFromDBSnapshot'].$get(args, options))
}

export async function postActionRestoreDBInstanceFromDBSnapshot(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromDBSnapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBInstanceFromDBSnapshot'].$post(args, options))
}

export async function getActionRestoreDBInstanceFromS3(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBInstanceFromS3'].$get(args, options))
}

export async function postActionRestoreDBInstanceFromS3(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceFromS3']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBInstanceFromS3'].$post(args, options))
}

export async function getActionRestoreDBInstanceToPointInTime(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBInstanceToPointInTime'].$get(args, options))
}

export async function postActionRestoreDBInstanceToPointInTime(
  args: InferRequestType<(typeof client)['#Action=RestoreDBInstanceToPointInTime']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestoreDBInstanceToPointInTime'].$post(args, options))
}

export async function getActionRevokeDBSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeDBSecurityGroupIngress'].$get(args, options))
}

export async function postActionRevokeDBSecurityGroupIngress(
  args: InferRequestType<(typeof client)['#Action=RevokeDBSecurityGroupIngress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RevokeDBSecurityGroupIngress'].$post(args, options))
}

export async function getActionStartActivityStream(
  args: InferRequestType<(typeof client)['#Action=StartActivityStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartActivityStream'].$get(args, options))
}

export async function postActionStartActivityStream(
  args: InferRequestType<(typeof client)['#Action=StartActivityStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartActivityStream'].$post(args, options))
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

export async function getActionStartDBInstance(
  args: InferRequestType<(typeof client)['#Action=StartDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartDBInstance'].$get(args, options))
}

export async function postActionStartDBInstance(
  args: InferRequestType<(typeof client)['#Action=StartDBInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartDBInstance'].$post(args, options))
}

export async function getActionStartDBInstanceAutomatedBackupsReplication(
  args: InferRequestType<
    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=StartDBInstanceAutomatedBackupsReplication'].$get(args, options),
  )
}

export async function postActionStartDBInstanceAutomatedBackupsReplication(
  args: InferRequestType<
    (typeof client)['#Action=StartDBInstanceAutomatedBackupsReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=StartDBInstanceAutomatedBackupsReplication'].$post(args, options),
  )
}

export async function getActionStartExportTask(
  args: InferRequestType<(typeof client)['#Action=StartExportTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartExportTask'].$get(args, options))
}

export async function postActionStartExportTask(
  args: InferRequestType<(typeof client)['#Action=StartExportTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartExportTask'].$post(args, options))
}

export async function getActionStopActivityStream(
  args: InferRequestType<(typeof client)['#Action=StopActivityStream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopActivityStream'].$get(args, options))
}

export async function postActionStopActivityStream(
  args: InferRequestType<(typeof client)['#Action=StopActivityStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopActivityStream'].$post(args, options))
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

export async function getActionStopDBInstance(
  args: InferRequestType<(typeof client)['#Action=StopDBInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopDBInstance'].$get(args, options))
}

export async function postActionStopDBInstance(
  args: InferRequestType<(typeof client)['#Action=StopDBInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopDBInstance'].$post(args, options))
}

export async function getActionStopDBInstanceAutomatedBackupsReplication(
  args: InferRequestType<
    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=StopDBInstanceAutomatedBackupsReplication'].$get(args, options),
  )
}

export async function postActionStopDBInstanceAutomatedBackupsReplication(
  args: InferRequestType<
    (typeof client)['#Action=StopDBInstanceAutomatedBackupsReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=StopDBInstanceAutomatedBackupsReplication'].$post(args, options),
  )
}

export async function getActionSwitchoverBlueGreenDeployment(
  args: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SwitchoverBlueGreenDeployment'].$get(args, options))
}

export async function postActionSwitchoverBlueGreenDeployment(
  args: InferRequestType<(typeof client)['#Action=SwitchoverBlueGreenDeployment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SwitchoverBlueGreenDeployment'].$post(args, options))
}

export async function getActionSwitchoverReadReplica(
  args: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SwitchoverReadReplica'].$get(args, options))
}

export async function postActionSwitchoverReadReplica(
  args: InferRequestType<(typeof client)['#Action=SwitchoverReadReplica']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SwitchoverReadReplica'].$post(args, options))
}
