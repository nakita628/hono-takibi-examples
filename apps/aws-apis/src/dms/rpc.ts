import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonDMSv20160101AddTagsToResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceAction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101BatchStartRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101CreateEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101CreateEventSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101CreateFleetAdvisorCollector(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101CreateReplicationInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101CreateReplicationTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteEventSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorCollector(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteFleetAdvisorDatabases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteReplicationInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteReplicationTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeAccountAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeApplicableIndividualAssessments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeCertificates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeConnections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeConnections'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeEndpointSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeEndpointTypes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeEventCategories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeEventSubscriptions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeEvents'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorCollectors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorDatabases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorLsaAnalysis(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeFleetAdvisorSchemas(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeOrderableReplicationInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeRecommendationLimitations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeRefreshSchemasStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeReplicationInstanceTaskLogs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeReplicationInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeReplicationSubnetGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentResults(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskAssessmentRuns(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeReplicationTaskIndividualAssessments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeReplicationTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeSchemas(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101DescribeTableStatistics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ImportCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ImportCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ModifyEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ModifyEventSubscription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ModifyReplicationInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ModifyReplicationTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101MoveReplicationTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101RebootReplicationInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101RefreshSchemas(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101ReloadTables(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDMSv20160101.ReloadTables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.ReloadTables'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101RemoveTagsFromResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101RunFleetAdvisorLsaAnalysis(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101StartRecommendations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.StartRecommendations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101StartReplicationTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonDMSv20160101StopReplicationTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101TestConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.TestConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.TestConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridge(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge'].$post(
      args,
      options,
    ),
  )
}
