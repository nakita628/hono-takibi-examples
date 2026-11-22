import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetElasticMapReduceAddInstanceFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceAddInstanceGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceAddJobFlowSteps(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceAddTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=ElasticMapReduce.AddTags'].$post(args, options))
}

export async function postXAmzTargetElasticMapReduceCancelSteps(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CancelSteps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.CancelSteps'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceCreateSecurityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceCreateStudio(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.CreateStudio'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceCreateStudioSessionMapping(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDeleteSecurityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDeleteStudio(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DeleteStudio'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDeleteStudioSessionMapping(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDescribeCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DescribeCluster'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDescribeJobFlows(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDescribeNotebookExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDescribeReleaseLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDescribeSecurityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDescribeStep(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStep']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DescribeStep'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceDescribeStudio(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStudio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.DescribeStudio'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceGetAutoTerminationPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceGetBlockPublicAccessConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceGetClusterSessionCredentials(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceGetManagedScalingPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceGetStudioSessionMapping(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListBootstrapActions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListClusters(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListClusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListClusters'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListInstanceFleets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListInstanceGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListInstances(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListInstances'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListNotebookExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListReleaseLabels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListSecurityConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListSteps(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListSteps'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListStudioSessionMappings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceListStudios(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudios']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ListStudios'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceModifyCluster(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ModifyCluster'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceModifyInstanceFleet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceModifyInstanceGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReducePutAutoScalingPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReducePutAutoTerminationPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReducePutBlockPublicAccessConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReducePutManagedScalingPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceRemoveAutoScalingPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceRemoveAutoTerminationPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceRemoveManagedScalingPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceRemoveTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.RemoveTags'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceRunJobFlow(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.RunJobFlow'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceSetTerminationProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceSetVisibleToAllUsers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceStartNotebookExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceStopNotebookExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceTerminateJobFlows(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceUpdateStudio(
  args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.UpdateStudio'].$post(args, options),
  )
}

export async function postXAmzTargetElasticMapReduceUpdateStudioSessionMapping(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping'].$post(args, options),
  )
}
