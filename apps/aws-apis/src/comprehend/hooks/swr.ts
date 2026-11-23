import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetComprehend20171127BatchDetectDominantLanguageKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127BatchDetectDominantLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127BatchDetectDominantLanguageKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127BatchDetectEntitiesKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectEntities',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127BatchDetectEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127BatchDetectEntitiesKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127BatchDetectKeyPhrasesKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127BatchDetectKeyPhrases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127BatchDetectKeyPhrasesKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127BatchDetectSentimentKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127BatchDetectSentiment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127BatchDetectSentimentKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127BatchDetectSyntaxKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127BatchDetectSyntax<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127BatchDetectSyntaxKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127BatchDetectTargetedSentimentKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment',
    '/#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127BatchDetectTargetedSentiment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127BatchDetectTargetedSentimentKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ClassifyDocumentKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ClassifyDocument',
    '/#X-Amz-Target=Comprehend_20171127.ClassifyDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ClassifyDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ClassifyDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ClassifyDocumentKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ClassifyDocument']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ClassifyDocument'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ContainsPiiEntitiesKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities',
    '/#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ContainsPiiEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ContainsPiiEntitiesKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127CreateDatasetKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateDataset',
    '/#X-Amz-Target=Comprehend_20171127.CreateDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127CreateDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127CreateDatasetKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.CreateDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127CreateDocumentClassifierKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier',
    '/#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127CreateDocumentClassifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127CreateDocumentClassifierKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127CreateEndpointKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateEndpoint',
    '/#X-Amz-Target=Comprehend_20171127.CreateEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127CreateEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127CreateEndpointKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.CreateEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127CreateEntityRecognizerKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer',
    '/#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127CreateEntityRecognizer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127CreateEntityRecognizerKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127CreateFlywheelKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.CreateFlywheel',
    '/#X-Amz-Target=Comprehend_20171127.CreateFlywheel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127CreateFlywheel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.CreateFlywheel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127CreateFlywheelKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateFlywheel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.CreateFlywheel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DeleteDocumentClassifierKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier',
    '/#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DeleteDocumentClassifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DeleteDocumentClassifierKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DeleteEndpointKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteEndpoint',
    '/#X-Amz-Target=Comprehend_20171127.DeleteEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DeleteEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DeleteEndpointKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DeleteEntityRecognizerKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer',
    '/#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DeleteEntityRecognizer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DeleteEntityRecognizerKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DeleteFlywheelKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteFlywheel',
    '/#X-Amz-Target=Comprehend_20171127.DeleteFlywheel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DeleteFlywheel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DeleteFlywheelKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy',
    '/#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DeleteResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DeleteResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeDatasetKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeDataset',
    '/#X-Amz-Target=Comprehend_20171127.DescribeDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeDataset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDataset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeDatasetKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeDataset'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeDocumentClassificationJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeDocumentClassificationJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127DescribeDocumentClassificationJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeDocumentClassifierKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier',
    '/#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeDocumentClassifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeDocumentClassifierKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeEndpointKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeEndpoint',
    '/#X-Amz-Target=Comprehend_20171127.DescribeEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeEndpointKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeEntitiesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeEntitiesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeEntitiesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeEntityRecognizerKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer',
    '/#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeEntityRecognizer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeEntityRecognizerKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeEventsDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeEventsDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeEventsDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeFlywheelKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeFlywheel',
    '/#X-Amz-Target=Comprehend_20171127.DescribeFlywheel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeFlywheel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeFlywheelKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeFlywheelIterationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration',
    '/#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeFlywheelIteration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeFlywheelIterationKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeResourcePolicyKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy',
    '/#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeSentimentDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeSentimentDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeSentimentDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DescribeTopicsDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DescribeTopicsDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DescribeTopicsDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DetectDominantLanguageKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage',
    '/#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DetectDominantLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DetectDominantLanguageKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DetectEntitiesKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectEntities',
    '/#X-Amz-Target=Comprehend_20171127.DetectEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DetectEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectEntities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DetectEntitiesKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DetectEntities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DetectKeyPhrasesKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases',
    '/#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DetectKeyPhrases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DetectKeyPhrasesKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DetectPiiEntitiesKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectPiiEntities',
    '/#X-Amz-Target=Comprehend_20171127.DetectPiiEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DetectPiiEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DetectPiiEntitiesKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DetectSentimentKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectSentiment',
    '/#X-Amz-Target=Comprehend_20171127.DetectSentiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DetectSentiment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSentiment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DetectSentimentKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSentiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DetectSentiment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DetectSyntaxKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectSyntax',
    '/#X-Amz-Target=Comprehend_20171127.DetectSyntax',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DetectSyntax<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSyntax']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DetectSyntaxKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSyntax']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DetectSyntax'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127DetectTargetedSentimentKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment',
    '/#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127DetectTargetedSentiment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127DetectTargetedSentimentKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ImportModelKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ImportModel',
    '/#X-Amz-Target=Comprehend_20171127.ImportModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ImportModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ImportModel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ImportModelKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ImportModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ImportModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListDatasetsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDatasets',
    '/#X-Amz-Target=Comprehend_20171127.ListDatasets',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListDatasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListDatasetsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDatasets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListDatasets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListDocumentClassificationJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListDocumentClassificationJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListDocumentClassificationJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListDocumentClassifierSummariesKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries',
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListDocumentClassifierSummaries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127ListDocumentClassifierSummariesKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListDocumentClassifiersKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers',
    '/#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListDocumentClassifiers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListDocumentClassifiersKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListDominantLanguageDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListEndpointsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEndpoints',
    '/#X-Amz-Target=Comprehend_20171127.ListEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListEndpointsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListEndpoints'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListEntitiesDetectionJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListEntitiesDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListEntitiesDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListEntityRecognizerSummariesKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries',
    '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListEntityRecognizerSummaries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListEntityRecognizerSummariesKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListEntityRecognizersKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers',
    '/#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListEntityRecognizers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListEntityRecognizersKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListEventsDetectionJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListEventsDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListEventsDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListFlywheelIterationHistoryKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory',
    '/#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListFlywheelIterationHistory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListFlywheelIterationHistoryKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListFlywheelsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListFlywheels',
    '/#X-Amz-Target=Comprehend_20171127.ListFlywheels',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListFlywheels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListFlywheelsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListFlywheels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListSentimentDetectionJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListSentimentDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListSentimentDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListTagsForResource',
    '/#X-Amz-Target=Comprehend_20171127.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127ListTopicsDetectionJobsKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs',
    '/#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127ListTopicsDetectionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127ListTopicsDetectionJobsKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127PutResourcePolicyKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.PutResourcePolicy',
    '/#X-Amz-Target=Comprehend_20171127.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127PutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127PutResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartDocumentClassificationJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob',
    '/#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartDocumentClassificationJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StartDocumentClassificationJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartDominantLanguageDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartDominantLanguageDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127StartDominantLanguageDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartEntitiesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartEntitiesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StartEntitiesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartEventsDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartEventsDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StartEventsDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartFlywheelIterationKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration',
    '/#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartFlywheelIteration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StartFlywheelIterationKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartKeyPhrasesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartPiiEntitiesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartSentimentDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartSentimentDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StartSentimentDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartTargetedSentimentDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127StartTargetedSentimentDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StartTopicsDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StartTopicsDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StartTopicsDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopDominantLanguageDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopDominantLanguageDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127StopDominantLanguageDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopEntitiesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopEntitiesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StopEntitiesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopEventsDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopEventsDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StopEventsDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopKeyPhrasesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopPiiEntitiesDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopSentimentDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopSentimentDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StopSentimentDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob',
    '/#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopTargetedSentimentDetectionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComprehend20171127StopTargetedSentimentDetectionJobKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopTrainingDocumentClassifierKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier',
    '/#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopTrainingDocumentClassifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StopTrainingDocumentClassifierKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127StopTrainingEntityRecognizerKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer',
    '/#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127StopTrainingEntityRecognizer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127StopTrainingEntityRecognizerKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127TagResourceKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.TagResource',
    '/#X-Amz-Target=Comprehend_20171127.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127TagResourceKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127UntagResourceKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.UntagResource',
    '/#X-Amz-Target=Comprehend_20171127.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127UpdateEndpointKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.UpdateEndpoint',
    '/#X-Amz-Target=Comprehend_20171127.UpdateEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127UpdateEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127UpdateEndpointKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComprehend20171127UpdateFlywheelKey() {
  return [
    '#X-Amz-Target=Comprehend_20171127.UpdateFlywheel',
    '/#X-Amz-Target=Comprehend_20171127.UpdateFlywheel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComprehend20171127UpdateFlywheel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComprehend20171127UpdateFlywheelKey()
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
            (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
