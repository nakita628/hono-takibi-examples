import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetInspectorServiceAddAttributesToFindings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.AddAttributesToFindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.AddAttributesToFindings'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceCreateAssessmentTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.CreateAssessmentTarget'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceCreateAssessmentTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.CreateAssessmentTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.CreateAssessmentTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceCreateExclusionsPreview(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.CreateExclusionsPreview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.CreateExclusionsPreview'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceCreateResourceGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.CreateResourceGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.CreateResourceGroup'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDeleteAssessmentRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DeleteAssessmentRun'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDeleteAssessmentTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DeleteAssessmentTarget'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDeleteAssessmentTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DeleteAssessmentTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDescribeAssessmentRuns(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DescribeAssessmentRuns'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDescribeAssessmentTargets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTargets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DescribeAssessmentTargets'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDescribeAssessmentTemplates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DescribeAssessmentTemplates'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDescribeCrossAccountAccessRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDescribeExclusions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DescribeExclusions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DescribeExclusions'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDescribeFindings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DescribeFindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DescribeFindings'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDescribeResourceGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DescribeResourceGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DescribeResourceGroups'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceDescribeRulesPackages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.DescribeRulesPackages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.DescribeRulesPackages'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceGetAssessmentReport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.GetAssessmentReport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.GetAssessmentReport'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceGetExclusionsPreview(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.GetExclusionsPreview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.GetExclusionsPreview'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceGetTelemetryMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.GetTelemetryMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.GetTelemetryMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListAssessmentRunAgents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRunAgents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListAssessmentRunAgents'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListAssessmentRuns(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListAssessmentRuns'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListAssessmentTargets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTargets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListAssessmentTargets'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListAssessmentTemplates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.ListAssessmentTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListAssessmentTemplates'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListEventSubscriptions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.ListEventSubscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListEventSubscriptions'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListExclusions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListExclusions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListExclusions'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListFindings(
  args: InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.ListFindings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListFindings'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListRulesPackages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.ListRulesPackages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListRulesPackages'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServicePreviewAgents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=InspectorService.PreviewAgents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.PreviewAgents'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceRegisterCrossAccountAccessRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceRemoveAttributesFromFindings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.RemoveAttributesFromFindings'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceSetTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.SetTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.SetTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceStartAssessmentRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.StartAssessmentRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.StartAssessmentRun'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceStopAssessmentRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.StopAssessmentRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.StopAssessmentRun'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceSubscribeToEvent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.SubscribeToEvent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.SubscribeToEvent'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceUnsubscribeFromEvent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.UnsubscribeFromEvent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.UnsubscribeFromEvent'].$post(args, options),
  )
}

export async function postXAmzTargetInspectorServiceUpdateAssessmentTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=InspectorService.UpdateAssessmentTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=InspectorService.UpdateAssessmentTarget'].$post(args, options),
  )
}
