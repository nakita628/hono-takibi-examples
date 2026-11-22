import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceBatchPutDocumentKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceCreateDataSourceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceCreateExperienceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.CreateExperience'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceCreateFaqKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.CreateFaq'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceCreateIndexKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.CreateIndex'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceCreateThesaurusKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDeleteDataSourceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDeleteExperienceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDeleteFaqKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDeleteIndexKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDeleteThesaurusKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeDataSourceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeExperienceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeFaqKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeIndexKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDescribeThesaurusKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceGetSnapshotsKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListDataSourcesKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListDataSources'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListEntityPersonasKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListExperiencesKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListExperiences'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListFaqsKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListFaqs'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListIndicesKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListIndices'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceListThesauriKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.ListThesauri'] as const
}

export function getXAmzTargetAWSKendraFrontendServicePutPrincipalMappingKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceQueryKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.Query'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceSubmitFeedbackKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceTagResourceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.TagResource'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUntagResourceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UntagResource'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUpdateDataSourceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUpdateExperienceKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUpdateIndexKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig'] as const
}

export function getXAmzTargetAWSKendraFrontendServiceUpdateThesaurusKey() {
  return ['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus'] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperience<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities',
    '/#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument',
    '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceBatchDeleteDocument<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet',
    '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus',
    '/#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchPutDocumentKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument',
    '/#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceBatchPutDocument<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceBatchPutDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions',
    '/#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceClearQuerySuggestions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateDataSourceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateDataSource',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceCreateDataSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceCreateDataSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateExperienceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateExperience',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceCreateExperience<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateExperience']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateExperience']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceCreateExperienceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateExperience']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.CreateExperience'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateFaqKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateFaq',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateFaq',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceCreateFaq<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFaq']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFaq']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceCreateFaqKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFaq']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.CreateFaq'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateIndexKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateIndex',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateIndex',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceCreateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateIndex']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateIndex']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceCreateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateIndex']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.CreateIndex'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateThesaurusKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceCreateThesaurus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceCreateThesaurusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteDataSourceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDeleteDataSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDeleteDataSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteExperienceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteExperience',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDeleteExperience<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDeleteExperienceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteFaqKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteFaq',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteFaq',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDeleteFaq<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDeleteFaqKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteIndexKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteIndex',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteIndex',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDeleteIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDeleteIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping',
    '/#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDeletePrincipalMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteThesaurusKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDeleteThesaurus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDeleteThesaurusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeDataSourceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeDataSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeDataSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeExperienceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeExperience',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeExperience<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeExperienceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeFaqKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeFaq',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeFaq',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeFaq<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeFaqKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeIndexKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeIndex',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeIndex',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribePrincipalMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeThesaurusKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDescribeThesaurus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDescribeThesaurusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperience<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities',
    '/#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions',
    '/#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceGetQuerySuggestions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceGetSnapshotsKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.GetSnapshots',
    '/#X-Amz-Target=AWSKendraFrontendService.GetSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceGetSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceGetSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations',
    '/#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs',
    '/#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListDataSourcesKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListDataSources',
    '/#X-Amz-Target=AWSKendraFrontendService.ListDataSources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListDataSources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSources']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListDataSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListDataSources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListEntityPersonasKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas',
    '/#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListEntityPersonas<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListEntityPersonasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities',
    '/#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListExperienceEntities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListExperiencesKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListExperiences',
    '/#X-Amz-Target=AWSKendraFrontendService.ListExperiences',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListExperiences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperiences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperiences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListExperiencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperiences']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListExperiences'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListFaqsKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListFaqs',
    '/#X-Amz-Target=AWSKendraFrontendService.ListFaqs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListFaqs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFaqs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFaqs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListFaqsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFaqs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListFaqs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets',
    '/#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId',
    '/#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListIndicesKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListIndices',
    '/#X-Amz-Target=AWSKendraFrontendService.ListIndices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListIndices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListIndices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListIndices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListIndicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListIndices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListIndices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists',
    '/#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockLists<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource',
    '/#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceListThesauriKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListThesauri',
    '/#X-Amz-Target=AWSKendraFrontendService.ListThesauri',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceListThesauri<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListThesauri']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListThesauri']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceListThesauriKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListThesauri']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.ListThesauri'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServicePutPrincipalMappingKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping',
    '/#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServicePutPrincipalMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServicePutPrincipalMappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceQueryKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.Query',
    '/#X-Amz-Target=AWSKendraFrontendService.Query',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.Query']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.Query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.Query']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.Query'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob',
    '/#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob',
    '/#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceSubmitFeedbackKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback',
    '/#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceSubmitFeedback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceSubmitFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceTagResourceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.TagResource',
    '/#X-Amz-Target=AWSKendraFrontendService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UntagResource',
    '/#X-Amz-Target=AWSKendraFrontendService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateDataSourceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUpdateDataSource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUpdateDataSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateExperienceKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateExperience',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUpdateExperience<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUpdateExperienceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateIndexKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateIndex',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateIndex',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUpdateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUpdateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockList<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateThesaurusKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSKendraFrontendServiceUpdateThesaurus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSKendraFrontendServiceUpdateThesaurusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
