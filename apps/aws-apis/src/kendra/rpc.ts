import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperience(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceBatchDeleteDocument(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceBatchPutDocument(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceClearQuerySuggestions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceCreateDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceCreateExperience(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateExperience']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.CreateExperience'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceCreateFaq(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFaq']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.CreateFaq'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceCreateIndex(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateIndex']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.CreateIndex'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceCreateThesaurus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDeleteDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDeleteExperience(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDeleteFaq(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDeleteIndex(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDeletePrincipalMapping(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDeleteThesaurus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeExperience(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeFaq(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeIndex(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribePrincipalMapping(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDescribeThesaurus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperience(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceGetQuerySuggestions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceGetSnapshots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListDataSources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListDataSources'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListEntityPersonas(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListExperienceEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListExperiences(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperiences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListExperiences'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListFaqs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFaqs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListFaqs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingId(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListIndices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListIndices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListIndices'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockLists(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceListThesauri(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListThesauri']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.ListThesauri'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServicePutPrincipalMapping(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.Query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.Query'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceSubmitFeedback(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUpdateDataSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUpdateExperience(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUpdateIndex(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex'].$post(args, options),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSKendraFrontendServiceUpdateThesaurus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus'].$post(args, options),
  )
}
