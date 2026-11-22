import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ProjectsProjectIdRegionsRegionClusters(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters.$get(args, options),
  )
}

export async function postV1ProjectsProjectIdRegionsRegionClusters(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters.$post(args, options),
  )
}

export async function getV1ProjectsProjectIdRegionsRegionClustersClusterName(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters'][':clusterName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters[':clusterName'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1ProjectsProjectIdRegionsRegionClustersClusterName(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters'][':clusterName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters[':clusterName'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1ProjectsProjectIdRegionsRegionClustersClusterName(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters'][':clusterName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters[':clusterName'].$patch(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectIdRegionsRegionClustersClusterNameDiagnose(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters'][':clusterName:diagnose']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters[':clusterName:diagnose'].$post(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectIdRegionsRegionClustersClusterNameRepair(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters'][':clusterName:repair']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters[':clusterName:repair'].$post(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectIdRegionsRegionClustersClusterNameStart(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters'][':clusterName:start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters[':clusterName:start'].$post(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectIdRegionsRegionClustersClusterNameStop(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['clusters'][':clusterName:stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].clusters[':clusterName:stop'].$post(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectIdRegionsRegionJobs(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].jobs.$get(args, options),
  )
}

export async function getV1ProjectsProjectIdRegionsRegionJobsJobId(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].jobs[':jobId'].$get(args, options),
  )
}

export async function deleteV1ProjectsProjectIdRegionsRegionJobsJobId(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['jobs'][':jobId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].jobs[':jobId'].$delete(args, options),
  )
}

export async function patchV1ProjectsProjectIdRegionsRegionJobsJobId(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['jobs'][':jobId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].jobs[':jobId'].$patch(args, options),
  )
}

export async function postV1ProjectsProjectIdRegionsRegionJobsJobIdCancel(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['jobs'][':jobId:cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region'].jobs[':jobId:cancel'].$post(args, options),
  )
}

export async function postV1ProjectsProjectIdRegionsRegionJobsSubmit(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['jobs:submit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region']['jobs:submit'].$post(args, options),
  )
}

export async function postV1ProjectsProjectIdRegionsRegionJobsSubmitAsOperation(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['regions'][':region']['jobs:submitAsOperation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].regions[':region']['jobs:submitAsOperation'].$post(
      args,
      options,
    ),
  )
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function putV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$put(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameInstantiate(
  args: InferRequestType<(typeof client.v1)[':name:instantiate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:instantiate'].$post(args, options))
}

export async function postV1NameResize(
  args: InferRequestType<(typeof client.v1)[':name:resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:resize'].$post(args, options))
}

export async function getV1ParentAutoscalingPolicies(
  args: InferRequestType<(typeof client.v1)[':parent']['autoscalingPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].autoscalingPolicies.$get(args, options))
}

export async function postV1ParentAutoscalingPolicies(
  args: InferRequestType<(typeof client.v1)[':parent']['autoscalingPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].autoscalingPolicies.$post(args, options))
}

export async function getV1ParentBatches(
  args: InferRequestType<(typeof client.v1)[':parent']['batches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].batches.$get(args, options))
}

export async function postV1ParentBatches(
  args: InferRequestType<(typeof client.v1)[':parent']['batches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].batches.$post(args, options))
}

export async function postV1ParentNodeGroups(
  args: InferRequestType<(typeof client.v1)[':parent']['nodeGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].nodeGroups.$post(args, options))
}

export async function getV1ParentWorkflowTemplates(
  args: InferRequestType<(typeof client.v1)[':parent']['workflowTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].workflowTemplates.$get(args, options))
}

export async function postV1ParentWorkflowTemplates(
  args: InferRequestType<(typeof client.v1)[':parent']['workflowTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].workflowTemplates.$post(args, options))
}

export async function postV1ParentWorkflowTemplatesInstantiateInline(
  args: InferRequestType<
    (typeof client.v1)[':parent']['workflowTemplates:instantiateInline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent']['workflowTemplates:instantiateInline'].$post(args, options),
  )
}

export async function postV1ProjectRegionClusterInjectCredentials(
  args: InferRequestType<
    (typeof client.v1)[':project'][':region'][':cluster:injectCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':project'][':region'][':cluster:injectCredentials'].$post(args, options),
  )
}

export async function postV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$post(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
