import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAclBootstrap(
  args: InferRequestType<typeof client.acl.bootstrap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.bootstrap.$post(args, options))
}

export async function getAclPolicies(
  args: InferRequestType<typeof client.acl.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.policies.$get(args, options))
}

export async function getAclPolicyPolicyName(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.policy[':policyName'].$get(args, options))
}

export async function postAclPolicyPolicyName(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.policy[':policyName'].$post(args, options))
}

export async function deleteAclPolicyPolicyName(
  args: InferRequestType<(typeof client.acl.policy)[':policyName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.policy[':policyName'].$delete(args, options))
}

export async function getAclToken(
  args: InferRequestType<typeof client.acl.token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.token.$get(args, options))
}

export async function getAclTokenTokenAccessor(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.token[':tokenAccessor'].$get(args, options))
}

export async function postAclTokenTokenAccessor(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.token[':tokenAccessor'].$post(args, options))
}

export async function deleteAclTokenTokenAccessor(
  args: InferRequestType<(typeof client.acl.token)[':tokenAccessor']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.token[':tokenAccessor'].$delete(args, options))
}

export async function postAclTokenOnetime(
  args: InferRequestType<typeof client.acl.token.onetime.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.token.onetime.$post(args, options))
}

export async function postAclTokenOnetimeExchange(
  args: InferRequestType<typeof client.acl.token.onetime.exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.token.onetime.exchange.$post(args, options))
}

export async function getAclTokens(
  args: InferRequestType<typeof client.acl.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acl.tokens.$get(args, options))
}

export async function getAllocationAllocID(
  args: InferRequestType<(typeof client.allocation)[':allocID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocation[':allocID'].$get(args, options))
}

export async function getAllocationAllocIDServices(
  args: InferRequestType<(typeof client.allocation)[':allocID']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocation[':allocID'].services.$get(args, options))
}

export async function postAllocationAllocIDStop(
  args: InferRequestType<(typeof client.allocation)[':allocID']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocation[':allocID'].stop.$post(args, options))
}

export async function getAllocations(
  args: InferRequestType<typeof client.allocations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.allocations.$get(args, options))
}

export async function getDeploymentDeploymentID(
  args: InferRequestType<(typeof client.deployment)[':deploymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deployment[':deploymentID'].$get(args, options))
}

export async function postDeploymentAllocationHealthDeploymentID(
  args: InferRequestType<(typeof client.deployment)['allocation-health'][':deploymentID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deployment['allocation-health'][':deploymentID'].$post(args, options),
  )
}

export async function getDeploymentAllocationsDeploymentID(
  args: InferRequestType<(typeof client.deployment.allocations)[':deploymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deployment.allocations[':deploymentID'].$get(args, options))
}

export async function postDeploymentFailDeploymentID(
  args: InferRequestType<(typeof client.deployment.fail)[':deploymentID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deployment.fail[':deploymentID'].$post(args, options))
}

export async function postDeploymentPauseDeploymentID(
  args: InferRequestType<(typeof client.deployment.pause)[':deploymentID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deployment.pause[':deploymentID'].$post(args, options))
}

export async function postDeploymentPromoteDeploymentID(
  args: InferRequestType<(typeof client.deployment.promote)[':deploymentID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deployment.promote[':deploymentID'].$post(args, options))
}

export async function postDeploymentUnblockDeploymentID(
  args: InferRequestType<(typeof client.deployment.unblock)[':deploymentID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deployment.unblock[':deploymentID'].$post(args, options))
}

export async function getDeployments(
  args: InferRequestType<typeof client.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deployments.$get(args, options))
}

export async function getEvaluationEvalID(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evaluation[':evalID'].$get(args, options))
}

export async function getEvaluationEvalIDAllocations(
  args: InferRequestType<(typeof client.evaluation)[':evalID']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evaluation[':evalID'].allocations.$get(args, options))
}

export async function getEvaluations(
  args: InferRequestType<typeof client.evaluations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.evaluations.$get(args, options))
}

export async function getJobJobName(
  args: InferRequestType<(typeof client.job)[':jobName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].$get(args, options))
}

export async function postJobJobName(
  args: InferRequestType<(typeof client.job)[':jobName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].$post(args, options))
}

export async function deleteJobJobName(
  args: InferRequestType<(typeof client.job)[':jobName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].$delete(args, options))
}

export async function getJobJobNameAllocations(
  args: InferRequestType<(typeof client.job)[':jobName']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].allocations.$get(args, options))
}

export async function getJobJobNameDeployment(
  args: InferRequestType<(typeof client.job)[':jobName']['deployment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].deployment.$get(args, options))
}

export async function getJobJobNameDeployments(
  args: InferRequestType<(typeof client.job)[':jobName']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].deployments.$get(args, options))
}

export async function postJobJobNameDispatch(
  args: InferRequestType<(typeof client.job)[':jobName']['dispatch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].dispatch.$post(args, options))
}

export async function postJobJobNameEvaluate(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].evaluate.$post(args, options))
}

export async function getJobJobNameEvaluations(
  args: InferRequestType<(typeof client.job)[':jobName']['evaluations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].evaluations.$get(args, options))
}

export async function postJobJobNamePeriodicForce(
  args: InferRequestType<(typeof client.job)[':jobName']['periodic']['force']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].periodic.force.$post(args, options))
}

export async function postJobJobNamePlan(
  args: InferRequestType<(typeof client.job)[':jobName']['plan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].plan.$post(args, options))
}

export async function postJobJobNameRevert(
  args: InferRequestType<(typeof client.job)[':jobName']['revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].revert.$post(args, options))
}

export async function getJobJobNameScale(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].scale.$get(args, options))
}

export async function postJobJobNameScale(
  args: InferRequestType<(typeof client.job)[':jobName']['scale']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].scale.$post(args, options))
}

export async function postJobJobNameStable(
  args: InferRequestType<(typeof client.job)[':jobName']['stable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].stable.$post(args, options))
}

export async function getJobJobNameSummary(
  args: InferRequestType<(typeof client.job)[':jobName']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].summary.$get(args, options))
}

export async function getJobJobNameVersions(
  args: InferRequestType<(typeof client.job)[':jobName']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobName'].versions.$get(args, options))
}

export async function getJobs(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$get(args, options))
}

export async function postJobs(
  args: InferRequestType<typeof client.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$post(args, options))
}

export async function postJobsParse(
  args: InferRequestType<typeof client.jobs.parse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.parse.$post(args, options))
}

export async function getMetrics(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.$get(args, options))
}

export async function postNamespace(
  args: InferRequestType<typeof client.namespace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespace.$post(args, options))
}

export async function getNamespaceNamespaceName(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespace[':namespaceName'].$get(args, options))
}

export async function postNamespaceNamespaceName(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespace[':namespaceName'].$post(args, options))
}

export async function deleteNamespaceNamespaceName(
  args: InferRequestType<(typeof client.namespace)[':namespaceName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespace[':namespaceName'].$delete(args, options))
}

export async function getNamespaces(
  args: InferRequestType<typeof client.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces.$get(args, options))
}

export async function getNodeNodeId(
  args: InferRequestType<(typeof client.node)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node[':nodeId'].$get(args, options))
}

export async function getNodeNodeIdAllocations(
  args: InferRequestType<(typeof client.node)[':nodeId']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node[':nodeId'].allocations.$get(args, options))
}

export async function postNodeNodeIdDrain(
  args: InferRequestType<(typeof client.node)[':nodeId']['drain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node[':nodeId'].drain.$post(args, options))
}

export async function postNodeNodeIdEligibility(
  args: InferRequestType<(typeof client.node)[':nodeId']['eligibility']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node[':nodeId'].eligibility.$post(args, options))
}

export async function postNodeNodeIdPurge(
  args: InferRequestType<(typeof client.node)[':nodeId']['purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node[':nodeId'].purge.$post(args, options))
}

export async function getNodes(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes.$get(args, options))
}

export async function getOperatorAutopilotConfiguration(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operator.autopilot.configuration.$get(args, options))
}

export async function putOperatorAutopilotConfiguration(
  args: InferRequestType<typeof client.operator.autopilot.configuration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operator.autopilot.configuration.$put(args, options))
}

export async function getOperatorAutopilotHealth(
  args: InferRequestType<typeof client.operator.autopilot.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operator.autopilot.health.$get(args, options))
}

export async function getOperatorRaftConfiguration(
  args: InferRequestType<typeof client.operator.raft.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operator.raft.configuration.$get(args, options))
}

export async function deleteOperatorRaftPeer(
  args: InferRequestType<typeof client.operator.raft.peer.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operator.raft.peer.$delete(args, options))
}

export async function getOperatorSchedulerConfiguration(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operator.scheduler.configuration.$get(args, options))
}

export async function postOperatorSchedulerConfiguration(
  args: InferRequestType<typeof client.operator.scheduler.configuration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operator.scheduler.configuration.$post(args, options))
}

export async function getPluginCsiPluginID(
  args: InferRequestType<(typeof client.plugin.csi)[':pluginID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugin.csi[':pluginID'].$get(args, options))
}

export async function getPlugins(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins.$get(args, options))
}

export async function postQuota(
  args: InferRequestType<typeof client.quota.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quota.$post(args, options))
}

export async function getQuotaSpecName(
  args: InferRequestType<(typeof client.quota)[':specName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quota[':specName'].$get(args, options))
}

export async function postQuotaSpecName(
  args: InferRequestType<(typeof client.quota)[':specName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quota[':specName'].$post(args, options))
}

export async function deleteQuotaSpecName(
  args: InferRequestType<(typeof client.quota)[':specName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quota[':specName'].$delete(args, options))
}

export async function getQuotas(
  args: InferRequestType<typeof client.quotas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotas.$get(args, options))
}

export async function getRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.regions.$get(undefined, options))
}

export async function getScalingPolicies(
  args: InferRequestType<typeof client.scaling.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaling.policies.$get(args, options))
}

export async function getScalingPolicyPolicyID(
  args: InferRequestType<(typeof client.scaling.policy)[':policyID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaling.policy[':policyID'].$get(args, options))
}

export async function postSearch(
  args: InferRequestType<typeof client.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$post(args, options))
}

export async function postSearchFuzzy(
  args: InferRequestType<typeof client.search.fuzzy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.fuzzy.$post(args, options))
}

export async function getStatusLeader(
  args: InferRequestType<typeof client.status.leader.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status.leader.$get(args, options))
}

export async function getStatusPeers(
  args: InferRequestType<typeof client.status.peers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status.peers.$get(args, options))
}

export async function putSystemGc(
  args: InferRequestType<typeof client.system.gc.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.gc.$put(args, options))
}

export async function putSystemReconcileSummaries(
  args: InferRequestType<typeof client.system.reconcile.summaries.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.reconcile.summaries.$put(args, options))
}

export async function postValidateJob(
  args: InferRequestType<typeof client.validate.job.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validate.job.$post(args, options))
}

export async function getVarPath(
  args: InferRequestType<(typeof client.var)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.var[':path'].$get(args, options))
}

export async function putVarPath(
  args: InferRequestType<(typeof client.var)[':path']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.var[':path'].$put(args, options))
}

export async function postVarPath(
  args: InferRequestType<(typeof client.var)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.var[':path'].$post(args, options))
}

export async function deleteVarPath(
  args: InferRequestType<(typeof client.var)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.var[':path'].$delete(args, options))
}

export async function getVars(
  args: InferRequestType<typeof client.vars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vars.$get(args, options))
}

export async function getVolumeCsiVolumeId(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volume.csi[':volumeId'].$get(args, options))
}

export async function postVolumeCsiVolumeId(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volume.csi[':volumeId'].$post(args, options))
}

export async function deleteVolumeCsiVolumeId(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volume.csi[':volumeId'].$delete(args, options))
}

export async function postVolumeCsiVolumeIdAction(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volume.csi[':volumeId'][':action'].$post(args, options))
}

export async function deleteVolumeCsiVolumeIdAction(
  args: InferRequestType<(typeof client.volume.csi)[':volumeId'][':action']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volume.csi[':volumeId'][':action'].$delete(args, options))
}

export async function getVolumes(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$get(args, options))
}

export async function postVolumes(
  args: InferRequestType<typeof client.volumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$post(args, options))
}

export async function getVolumesExternal(
  args: InferRequestType<typeof client.volumes.external.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.external.$get(args, options))
}

export async function getVolumesSnapshot(
  args: InferRequestType<typeof client.volumes.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.snapshot.$get(args, options))
}

export async function postVolumesSnapshot(
  args: InferRequestType<typeof client.volumes.snapshot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.snapshot.$post(args, options))
}

export async function deleteVolumesSnapshot(
  args: InferRequestType<typeof client.volumes.snapshot.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.snapshot.$delete(args, options))
}
