import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAppRunnerAssociateCustomDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.AssociateCustomDomain'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerCreateAutoScalingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerCreateConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.CreateConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerCreateObservabilityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerCreateService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.CreateService'].$post(args, options))
}

export async function postXAmzTargetAppRunnerCreateVpcConnector(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.CreateVpcConnector'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerCreateVpcIngressConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.CreateVpcIngressConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDeleteAutoScalingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDeleteConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DeleteConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDeleteObservabilityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDeleteService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.DeleteService'].$post(args, options))
}

export async function postXAmzTargetAppRunnerDeleteVpcConnector(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DeleteVpcConnector'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDeleteVpcIngressConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDescribeAutoScalingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDescribeCustomDomains(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DescribeCustomDomains'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDescribeObservabilityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDescribeService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.DescribeService'].$post(args, options))
}

export async function postXAmzTargetAppRunnerDescribeVpcConnector(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DescribeVpcConnector'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDescribeVpcIngressConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerDisassociateCustomDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.DisassociateCustomDomain'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerListAutoScalingConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerListConnections(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.ListConnections'].$post(args, options))
}

export async function postXAmzTargetAppRunnerListObservabilityConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.ListObservabilityConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerListOperations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.ListOperations'].$post(args, options))
}

export async function postXAmzTargetAppRunnerListServices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.ListServices'].$post(args, options))
}

export async function postXAmzTargetAppRunnerListTagsForResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerListVpcConnectors(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.ListVpcConnectors'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerListVpcIngressConnections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.ListVpcIngressConnections'].$post(args, options),
  )
}

export async function postXAmzTargetAppRunnerPauseService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.PauseService'].$post(args, options))
}

export async function postXAmzTargetAppRunnerResumeService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.ResumeService'].$post(args, options))
}

export async function postXAmzTargetAppRunnerStartDeployment(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.StartDeployment'].$post(args, options))
}

export async function postXAmzTargetAppRunnerTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.TagResource'].$post(args, options))
}

export async function postXAmzTargetAppRunnerUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.UntagResource'].$post(args, options))
}

export async function postXAmzTargetAppRunnerUpdateService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AppRunner.UpdateService'].$post(args, options))
}

export async function postXAmzTargetAppRunnerUpdateVpcIngressConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection'].$post(args, options),
  )
}
