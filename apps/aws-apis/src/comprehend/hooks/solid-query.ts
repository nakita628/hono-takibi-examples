import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetComprehend_20171127BatchDetectDominantLanguageKey() {
  return ['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage'] as const
}

export function getXAmzTargetComprehend_20171127BatchDetectEntitiesKey() {
  return ['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities'] as const
}

export function getXAmzTargetComprehend_20171127BatchDetectKeyPhrasesKey() {
  return ['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases'] as const
}

export function getXAmzTargetComprehend_20171127BatchDetectSentimentKey() {
  return ['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment'] as const
}

export function getXAmzTargetComprehend_20171127BatchDetectSyntaxKey() {
  return ['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax'] as const
}

export function getXAmzTargetComprehend_20171127BatchDetectTargetedSentimentKey() {
  return ['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment'] as const
}

export function getXAmzTargetComprehend_20171127ClassifyDocumentKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ClassifyDocument'] as const
}

export function getXAmzTargetComprehend_20171127ContainsPiiEntitiesKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities'] as const
}

export function getXAmzTargetComprehend_20171127CreateDatasetKey() {
  return ['#X-Amz-Target=Comprehend_20171127.CreateDataset'] as const
}

export function getXAmzTargetComprehend_20171127CreateDocumentClassifierKey() {
  return ['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier'] as const
}

export function getXAmzTargetComprehend_20171127CreateEndpointKey() {
  return ['#X-Amz-Target=Comprehend_20171127.CreateEndpoint'] as const
}

export function getXAmzTargetComprehend_20171127CreateEntityRecognizerKey() {
  return ['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer'] as const
}

export function getXAmzTargetComprehend_20171127CreateFlywheelKey() {
  return ['#X-Amz-Target=Comprehend_20171127.CreateFlywheel'] as const
}

export function getXAmzTargetComprehend_20171127DeleteDocumentClassifierKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier'] as const
}

export function getXAmzTargetComprehend_20171127DeleteEndpointKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint'] as const
}

export function getXAmzTargetComprehend_20171127DeleteEntityRecognizerKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer'] as const
}

export function getXAmzTargetComprehend_20171127DeleteFlywheelKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel'] as const
}

export function getXAmzTargetComprehend_20171127DeleteResourcePolicyKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy'] as const
}

export function getXAmzTargetComprehend_20171127DescribeDatasetKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeDataset'] as const
}

export function getXAmzTargetComprehend_20171127DescribeDocumentClassificationJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob'] as const
}

export function getXAmzTargetComprehend_20171127DescribeDocumentClassifierKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier'] as const
}

export function getXAmzTargetComprehend_20171127DescribeDominantLanguageDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127DescribeEndpointKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint'] as const
}

export function getXAmzTargetComprehend_20171127DescribeEntitiesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127DescribeEntityRecognizerKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer'] as const
}

export function getXAmzTargetComprehend_20171127DescribeEventsDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127DescribeFlywheelKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel'] as const
}

export function getXAmzTargetComprehend_20171127DescribeFlywheelIterationKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration'] as const
}

export function getXAmzTargetComprehend_20171127DescribeKeyPhrasesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127DescribePiiEntitiesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127DescribeResourcePolicyKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy'] as const
}

export function getXAmzTargetComprehend_20171127DescribeSentimentDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127DescribeTargetedSentimentDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127DescribeTopicsDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127DetectDominantLanguageKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage'] as const
}

export function getXAmzTargetComprehend_20171127DetectEntitiesKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DetectEntities'] as const
}

export function getXAmzTargetComprehend_20171127DetectKeyPhrasesKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases'] as const
}

export function getXAmzTargetComprehend_20171127DetectPiiEntitiesKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities'] as const
}

export function getXAmzTargetComprehend_20171127DetectSentimentKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DetectSentiment'] as const
}

export function getXAmzTargetComprehend_20171127DetectSyntaxKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DetectSyntax'] as const
}

export function getXAmzTargetComprehend_20171127DetectTargetedSentimentKey() {
  return ['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment'] as const
}

export function getXAmzTargetComprehend_20171127ImportModelKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ImportModel'] as const
}

export function getXAmzTargetComprehend_20171127ListDatasetsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListDatasets'] as const
}

export function getXAmzTargetComprehend_20171127ListDocumentClassificationJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs'] as const
}

export function getXAmzTargetComprehend_20171127ListDocumentClassifierSummariesKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries'] as const
}

export function getXAmzTargetComprehend_20171127ListDocumentClassifiersKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers'] as const
}

export function getXAmzTargetComprehend_20171127ListDominantLanguageDetectionJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs'] as const
}

export function getXAmzTargetComprehend_20171127ListEndpointsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListEndpoints'] as const
}

export function getXAmzTargetComprehend_20171127ListEntitiesDetectionJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs'] as const
}

export function getXAmzTargetComprehend_20171127ListEntityRecognizerSummariesKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries'] as const
}

export function getXAmzTargetComprehend_20171127ListEntityRecognizersKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers'] as const
}

export function getXAmzTargetComprehend_20171127ListEventsDetectionJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs'] as const
}

export function getXAmzTargetComprehend_20171127ListFlywheelIterationHistoryKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory'] as const
}

export function getXAmzTargetComprehend_20171127ListFlywheelsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListFlywheels'] as const
}

export function getXAmzTargetComprehend_20171127ListKeyPhrasesDetectionJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs'] as const
}

export function getXAmzTargetComprehend_20171127ListPiiEntitiesDetectionJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs'] as const
}

export function getXAmzTargetComprehend_20171127ListSentimentDetectionJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs'] as const
}

export function getXAmzTargetComprehend_20171127ListTagsForResourceKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListTagsForResource'] as const
}

export function getXAmzTargetComprehend_20171127ListTargetedSentimentDetectionJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs'] as const
}

export function getXAmzTargetComprehend_20171127ListTopicsDetectionJobsKey() {
  return ['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs'] as const
}

export function getXAmzTargetComprehend_20171127PutResourcePolicyKey() {
  return ['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy'] as const
}

export function getXAmzTargetComprehend_20171127StartDocumentClassificationJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob'] as const
}

export function getXAmzTargetComprehend_20171127StartDominantLanguageDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StartEntitiesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StartEventsDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StartFlywheelIterationKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration'] as const
}

export function getXAmzTargetComprehend_20171127StartKeyPhrasesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StartPiiEntitiesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StartSentimentDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StartTargetedSentimentDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StartTopicsDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StopDominantLanguageDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StopEntitiesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StopEventsDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StopKeyPhrasesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StopPiiEntitiesDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StopSentimentDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StopTargetedSentimentDetectionJobKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob'] as const
}

export function getXAmzTargetComprehend_20171127StopTrainingDocumentClassifierKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier'] as const
}

export function getXAmzTargetComprehend_20171127StopTrainingEntityRecognizerKey() {
  return ['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer'] as const
}

export function getXAmzTargetComprehend_20171127TagResourceKey() {
  return ['#X-Amz-Target=Comprehend_20171127.TagResource'] as const
}

export function getXAmzTargetComprehend_20171127UntagResourceKey() {
  return ['#X-Amz-Target=Comprehend_20171127.UntagResource'] as const
}

export function getXAmzTargetComprehend_20171127UpdateEndpointKey() {
  return ['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint'] as const
}

export function getXAmzTargetComprehend_20171127UpdateFlywheelKey() {
  return ['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel'] as const
}

export function getPostXAmzTargetComprehend20171127BatchDetectDominantLanguageMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127BatchDetectDominantLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127BatchDetectDominantLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127BatchDetectDominantLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127BatchDetectDominantLanguageMutationOptions<
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

export function getPostXAmzTargetComprehend20171127BatchDetectEntitiesMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectEntities',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127BatchDetectEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127BatchDetectEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127BatchDetectEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127BatchDetectEntitiesMutationOptions<
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

export function getPostXAmzTargetComprehend20171127BatchDetectKeyPhrasesMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127BatchDetectKeyPhrasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127BatchDetectKeyPhrasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127BatchDetectKeyPhrases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127BatchDetectKeyPhrasesMutationOptions<
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

export function getPostXAmzTargetComprehend20171127BatchDetectSentimentMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127BatchDetectSentimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127BatchDetectSentimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127BatchDetectSentiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127BatchDetectSentimentMutationOptions<
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

export function getPostXAmzTargetComprehend20171127BatchDetectSyntaxMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127BatchDetectSyntaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127BatchDetectSyntaxMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127BatchDetectSyntax<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127BatchDetectSyntaxMutationOptions<
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

export function getPostXAmzTargetComprehend20171127BatchDetectTargetedSentimentMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127BatchDetectTargetedSentimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127BatchDetectTargetedSentimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127BatchDetectTargetedSentiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127BatchDetectTargetedSentimentMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ClassifyDocumentMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ClassifyDocument',
    '/#X-Amz-Target=Comprehend_20171127.ClassifyDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ClassifyDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ClassifyDocument']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ClassifyDocument']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ClassifyDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ClassifyDocument']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ClassifyDocument'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ClassifyDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ClassifyDocument']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ClassifyDocument']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127ClassifyDocumentMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ContainsPiiEntitiesMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities',
    '/#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ContainsPiiEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ContainsPiiEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ContainsPiiEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127ContainsPiiEntitiesMutationOptions<
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

export function getPostXAmzTargetComprehend20171127CreateDatasetMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateDataset',
    '/#X-Amz-Target=Comprehend_20171127.CreateDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127CreateDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDataset']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127CreateDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.CreateDataset'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127CreateDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDataset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDataset']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127CreateDatasetMutationOptions<
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

export function getPostXAmzTargetComprehend20171127CreateDocumentClassifierMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier',
    '/#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127CreateDocumentClassifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127CreateDocumentClassifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127CreateDocumentClassifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127CreateDocumentClassifierMutationOptions<
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

export function getPostXAmzTargetComprehend20171127CreateEndpointMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateEndpoint',
    '/#X-Amz-Target=Comprehend_20171127.CreateEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127CreateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEndpoint']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127CreateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.CreateEndpoint'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127CreateEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEndpoint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEndpoint']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127CreateEndpointMutationOptions<
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

export function getPostXAmzTargetComprehend20171127CreateEntityRecognizerMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer',
    '/#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127CreateEntityRecognizerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127CreateEntityRecognizerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127CreateEntityRecognizer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127CreateEntityRecognizerMutationOptions<
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

export function getPostXAmzTargetComprehend20171127CreateFlywheelMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateFlywheel',
    '/#X-Amz-Target=Comprehend_20171127.CreateFlywheel',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127CreateFlywheelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateFlywheel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateFlywheel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127CreateFlywheelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateFlywheel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.CreateFlywheel'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127CreateFlywheel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateFlywheel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateFlywheel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127CreateFlywheelMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DeleteDocumentClassifierMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier',
    '/#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DeleteDocumentClassifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DeleteDocumentClassifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DeleteDocumentClassifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DeleteDocumentClassifierMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DeleteEndpointMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteEndpoint',
    '/#X-Amz-Target=Comprehend_20171127.DeleteEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DeleteEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DeleteEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DeleteEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DeleteEndpointMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DeleteEntityRecognizerMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer',
    '/#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DeleteEntityRecognizerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DeleteEntityRecognizerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DeleteEntityRecognizer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DeleteEntityRecognizerMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DeleteFlywheelMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteFlywheel',
    '/#X-Amz-Target=Comprehend_20171127.DeleteFlywheel',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DeleteFlywheelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DeleteFlywheelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DeleteFlywheel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DeleteFlywheelMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DeleteResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy',
    '/#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DeleteResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DeleteResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DeleteResourcePolicyMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeDatasetMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeDataset',
    '/#X-Amz-Target=Comprehend_20171127.DescribeDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDataset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDataset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeDataset'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeDataset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDataset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDataset']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DescribeDatasetMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeDocumentClassificationJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeDocumentClassificationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeDocumentClassificationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeDocumentClassificationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeDocumentClassificationJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeDocumentClassifierMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier',
    '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeDocumentClassifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeDocumentClassifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeDocumentClassifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeDocumentClassifierMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeEndpointMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeEndpoint',
    '/#X-Amz-Target=Comprehend_20171127.DescribeEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DescribeEndpointMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeEntitiesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeEntitiesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeEntitiesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeEntitiesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeEntitiesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeEntityRecognizerMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer',
    '/#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeEntityRecognizerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeEntityRecognizerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeEntityRecognizer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeEntityRecognizerMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeEventsDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeEventsDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeEventsDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeEventsDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeEventsDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeFlywheelMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeFlywheel',
    '/#X-Amz-Target=Comprehend_20171127.DescribeFlywheel',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeFlywheelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeFlywheelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeFlywheel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DescribeFlywheelMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeFlywheelIterationMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration',
    '/#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeFlywheelIterationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeFlywheelIterationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeFlywheelIteration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeFlywheelIterationMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy',
    '/#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeResourcePolicyMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeSentimentDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeSentimentDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeSentimentDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeSentimentDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeSentimentDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DescribeTopicsDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DescribeTopicsDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DescribeTopicsDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DescribeTopicsDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DescribeTopicsDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DetectDominantLanguageMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage',
    '/#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DetectDominantLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DetectDominantLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DetectDominantLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DetectDominantLanguageMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DetectEntitiesMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectEntities',
    '/#X-Amz-Target=Comprehend_20171127.DetectEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DetectEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectEntities']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectEntities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DetectEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DetectEntities'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DetectEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectEntities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectEntities']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DetectEntitiesMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DetectKeyPhrasesMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases',
    '/#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DetectKeyPhrasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DetectKeyPhrasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DetectKeyPhrases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DetectKeyPhrasesMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DetectPiiEntitiesMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectPiiEntities',
    '/#X-Amz-Target=Comprehend_20171127.DetectPiiEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DetectPiiEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DetectPiiEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DetectPiiEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DetectPiiEntitiesMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DetectSentimentMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectSentiment',
    '/#X-Amz-Target=Comprehend_20171127.DetectSentiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DetectSentimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSentiment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSentiment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DetectSentimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSentiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DetectSentiment'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DetectSentiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSentiment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSentiment']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DetectSentimentMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DetectSyntaxMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectSyntax',
    '/#X-Amz-Target=Comprehend_20171127.DetectSyntax',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DetectSyntaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSyntax']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSyntax']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DetectSyntaxMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSyntax']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DetectSyntax'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DetectSyntax<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSyntax']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSyntax']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127DetectSyntaxMutationOptions<
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

export function getPostXAmzTargetComprehend20171127DetectTargetedSentimentMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment',
    '/#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127DetectTargetedSentimentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127DetectTargetedSentimentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127DetectTargetedSentiment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127DetectTargetedSentimentMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ImportModelMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ImportModel',
    '/#X-Amz-Target=Comprehend_20171127.ImportModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ImportModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ImportModel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ImportModel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ImportModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ImportModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ImportModel'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ImportModel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ImportModel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ImportModel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127ImportModelMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListDatasetsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDatasets',
    '/#X-Amz-Target=Comprehend_20171127.ListDatasets',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListDatasets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListDatasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDatasets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListDatasets'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListDatasets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDatasets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDatasets']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127ListDatasetsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListDocumentClassificationJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListDocumentClassificationJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListDocumentClassificationJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListDocumentClassificationJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListDocumentClassificationJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListDocumentClassifierSummariesMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries',
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListDocumentClassifierSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListDocumentClassifierSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListDocumentClassifierSummaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListDocumentClassifierSummariesMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListDocumentClassifiersMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers',
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListDocumentClassifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListDocumentClassifiersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListDocumentClassifiers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListDocumentClassifiersMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListDominantLanguageDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListEndpointsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEndpoints',
    '/#X-Amz-Target=Comprehend_20171127.ListEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListEndpoints']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListEndpoints'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEndpoints']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEndpoints']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127ListEndpointsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListEntitiesDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListEntitiesDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListEntitiesDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListEntitiesDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListEntitiesDetectionJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListEntityRecognizerSummariesMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries',
    '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListEntityRecognizerSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListEntityRecognizerSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListEntityRecognizerSummaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListEntityRecognizerSummariesMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListEntityRecognizersMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers',
    '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListEntityRecognizersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListEntityRecognizersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListEntityRecognizers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListEntityRecognizersMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListEventsDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListEventsDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListEventsDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListEventsDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListEventsDetectionJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListFlywheelIterationHistoryMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory',
    '/#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListFlywheelIterationHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListFlywheelIterationHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListFlywheelIterationHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListFlywheelIterationHistoryMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListFlywheelsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListFlywheels',
    '/#X-Amz-Target=Comprehend_20171127.ListFlywheels',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListFlywheelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListFlywheelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListFlywheels'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListFlywheels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheels']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127ListFlywheelsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListSentimentDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListSentimentDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListSentimentDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListSentimentDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListSentimentDetectionJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListTagsForResource',
    '/#X-Amz-Target=Comprehend_20171127.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127ListTopicsDetectionJobsMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127ListTopicsDetectionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127ListTopicsDetectionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127ListTopicsDetectionJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127ListTopicsDetectionJobsMutationOptions<
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

export function getPostXAmzTargetComprehend20171127PutResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.PutResourcePolicy',
    '/#X-Amz-Target=Comprehend_20171127.PutResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127PutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127PutResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127PutResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127PutResourcePolicyMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartDocumentClassificationJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob',
    '/#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartDocumentClassificationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartDocumentClassificationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartDocumentClassificationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartDocumentClassificationJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartDominantLanguageDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartDominantLanguageDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartDominantLanguageDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartDominantLanguageDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartDominantLanguageDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartEntitiesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartEntitiesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartEntitiesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartEntitiesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartEntitiesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartEventsDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartEventsDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartEventsDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartEventsDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartEventsDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartFlywheelIterationMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration',
    '/#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartFlywheelIterationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartFlywheelIterationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartFlywheelIteration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartFlywheelIterationMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartKeyPhrasesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartPiiEntitiesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartSentimentDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartSentimentDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartSentimentDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartSentimentDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartSentimentDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartTargetedSentimentDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StartTopicsDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StartTopicsDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StartTopicsDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StartTopicsDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StartTopicsDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopDominantLanguageDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopDominantLanguageDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopDominantLanguageDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopDominantLanguageDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopDominantLanguageDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopEntitiesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopEntitiesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopEntitiesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopEntitiesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopEntitiesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopEventsDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopEventsDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopEventsDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopEventsDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopEventsDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopKeyPhrasesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopPiiEntitiesDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopSentimentDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopSentimentDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopSentimentDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopSentimentDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopSentimentDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopTargetedSentimentDetectionJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopTrainingDocumentClassifierMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier',
    '/#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopTrainingDocumentClassifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopTrainingDocumentClassifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopTrainingDocumentClassifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopTrainingDocumentClassifierMutationOptions<
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

export function getPostXAmzTargetComprehend20171127StopTrainingEntityRecognizerMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer',
    '/#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127StopTrainingEntityRecognizerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127StopTrainingEntityRecognizerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127StopTrainingEntityRecognizer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetComprehend20171127StopTrainingEntityRecognizerMutationOptions<
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

export function getPostXAmzTargetComprehend20171127TagResourceMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.TagResource',
    '/#X-Amz-Target=Comprehend_20171127.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.TagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127TagResourceMutationOptions<
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

export function getPostXAmzTargetComprehend20171127UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.UntagResource',
    '/#X-Amz-Target=Comprehend_20171127.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127UntagResourceMutationOptions<
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

export function getPostXAmzTargetComprehend20171127UpdateEndpointMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.UpdateEndpoint',
    '/#X-Amz-Target=Comprehend_20171127.UpdateEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127UpdateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127UpdateEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127UpdateEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127UpdateEndpointMutationOptions<
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

export function getPostXAmzTargetComprehend20171127UpdateFlywheelMutationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.UpdateFlywheel',
    '/#X-Amz-Target=Comprehend_20171127.UpdateFlywheel',
    'POST',
  ] as const
}

export function getPostXAmzTargetComprehend20171127UpdateFlywheelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComprehend20171127UpdateFlywheelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComprehend20171127UpdateFlywheel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetComprehend20171127UpdateFlywheelMutationOptions<
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
