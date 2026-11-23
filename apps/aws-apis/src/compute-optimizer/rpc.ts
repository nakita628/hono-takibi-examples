import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferences(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceExportECSServiceRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetrics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetrics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferences(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetEnrollmentStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus'].$post(args, options),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetRecommendationPreferences(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceGetRecommendationSummaries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries'].$post(args, options),
  )
}

export async function postXAmzTargetComputeOptimizerServicePutRecommendationPreferences(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus'].$post(args, options),
  )
}
