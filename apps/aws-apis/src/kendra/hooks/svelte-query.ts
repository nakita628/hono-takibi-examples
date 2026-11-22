import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperience<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities',
    '/#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument',
    '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceBatchDeleteDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet',
    '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus',
    '/#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchPutDocumentMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument',
    '/#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceBatchPutDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceBatchPutDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceBatchPutDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceBatchPutDocumentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions',
    '/#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceClearQuerySuggestions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateDataSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateDataSource',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceCreateDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceCreateDataSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateDataSource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceCreateDataSourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateExperienceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateExperience',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateExperienceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateExperience']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceCreateExperienceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateExperience']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.CreateExperience'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceCreateExperience<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateExperience']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceCreateExperienceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateFaqMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateFaq',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateFaq',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateFaqMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFaq']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceCreateFaqMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFaq']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.CreateFaq'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceCreateFaq<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFaq']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFaq']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceCreateFaqMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateIndexMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateIndex',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateIndex',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateIndex']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceCreateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateIndex']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.CreateIndex'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceCreateIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateIndex']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceCreateIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateThesaurusMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus',
    '/#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceCreateThesaurusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceCreateThesaurusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceCreateThesaurus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceCreateThesaurusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteDataSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDeleteDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDeleteDataSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDeleteDataSourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteExperienceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteExperience',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteExperienceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDeleteExperienceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDeleteExperience<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteExperience']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDeleteExperienceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteFaqMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteFaq',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteFaq',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteFaqMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDeleteFaqMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDeleteFaq<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteFaq']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceDeleteFaqMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteIndexMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteIndex',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteIndex',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDeleteIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDeleteIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteIndex']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceDeleteIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping',
    '/#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDeletePrincipalMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteThesaurusMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus',
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDeleteThesaurusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDeleteThesaurusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDeleteThesaurus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDeleteThesaurusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeDataSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDescribeDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeDataSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDescribeDataSourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeExperienceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeExperience',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeExperienceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDescribeExperienceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeExperience<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeExperience']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDescribeExperienceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeFaqMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeFaq',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeFaq',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeFaqMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDescribeFaqMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeFaq<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFaq']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceDescribeFaqMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeIndexMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeIndex',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeIndex',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDescribeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeIndex']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceDescribeIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribePrincipalMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeThesaurusMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus',
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDescribeThesaurusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceDescribeThesaurusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDescribeThesaurus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDescribeThesaurusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperience<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities',
    '/#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions',
    '/#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceGetQuerySuggestions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceGetSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.GetSnapshots',
    '/#X-Amz-Target=AWSKendraFrontendService.GetSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceGetSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceGetSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceGetSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.GetSnapshots']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceGetSnapshotsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations',
    '/#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs',
    '/#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListDataSourcesMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListDataSources',
    '/#X-Amz-Target=AWSKendraFrontendService.ListDataSources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListDataSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListDataSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListDataSources'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListDataSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListDataSources']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListDataSourcesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListEntityPersonasMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas',
    '/#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListEntityPersonasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListEntityPersonasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListEntityPersonas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListEntityPersonasMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities',
    '/#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListExperienceEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListExperiencesMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListExperiences',
    '/#X-Amz-Target=AWSKendraFrontendService.ListExperiences',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListExperiencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperiences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListExperiencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperiences']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListExperiences'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListExperiences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListExperiences']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListExperiencesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListFaqsMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListFaqs',
    '/#X-Amz-Target=AWSKendraFrontendService.ListFaqs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListFaqsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFaqs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListFaqsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFaqs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListFaqs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListFaqs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFaqs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFaqs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceListFaqsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets',
    '/#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId',
    '/#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListGroupsOlderThanOrderingIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListIndicesMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListIndices',
    '/#X-Amz-Target=AWSKendraFrontendService.ListIndices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListIndicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListIndices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListIndicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListIndices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListIndices'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListIndices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListIndices']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceListIndicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists',
    '/#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource',
    '/#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceListTagsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceListThesauriMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.ListThesauri',
    '/#X-Amz-Target=AWSKendraFrontendService.ListThesauri',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceListThesauriMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListThesauri']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceListThesauriMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListThesauri']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.ListThesauri'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceListThesauri<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.ListThesauri']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceListThesauriMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServicePutPrincipalMappingMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping',
    '/#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServicePutPrincipalMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServicePutPrincipalMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServicePutPrincipalMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServicePutPrincipalMappingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceQueryMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.Query',
    '/#X-Amz-Target=AWSKendraFrontendService.Query',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.Query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.Query']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.Query'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=AWSKendraFrontendService.Query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceQueryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob',
    '/#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob',
    '/#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceSubmitFeedbackMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback',
    '/#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceSubmitFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceSubmitFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceSubmitFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceSubmitFeedbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.TagResource',
    '/#X-Amz-Target=AWSKendraFrontendService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UntagResource',
    '/#X-Amz-Target=AWSKendraFrontendService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateDataSourceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateDataSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceUpdateDataSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUpdateDataSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceUpdateDataSourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateExperienceMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateExperience',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateExperience',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateExperienceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceUpdateExperienceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUpdateExperience<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateExperience']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceUpdateExperienceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateIndexMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateIndex',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateIndex',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceUpdateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUpdateIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateIndex']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAWSKendraFrontendServiceUpdateIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateThesaurusMutationKey() {
  return [
    '#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus',
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSKendraFrontendServiceUpdateThesaurusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSKendraFrontendServiceUpdateThesaurusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAWSKendraFrontendServiceUpdateThesaurus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAWSKendraFrontendServiceUpdateThesaurusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
