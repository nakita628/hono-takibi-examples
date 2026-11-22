import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetComprehend20171127BatchDetectDominantLanguage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127BatchDetectEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.BatchDetectEntities'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127BatchDetectKeyPhrases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127BatchDetectSentiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127BatchDetectSyntax(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127BatchDetectTargetedSentiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ClassifyDocument(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ClassifyDocument']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ClassifyDocument'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ContainsPiiEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127CreateDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.CreateDataset'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127CreateDocumentClassifier(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127CreateEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.CreateEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127CreateEntityRecognizer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127CreateFlywheel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.CreateFlywheel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.CreateFlywheel'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DeleteDocumentClassifier(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DeleteEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DeleteEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DeleteEntityRecognizer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DeleteFlywheel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DeleteFlywheel'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DeleteResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeDataset'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeDocumentClassificationJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127DescribeDocumentClassifier(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127DescribeEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeEntitiesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeEntityRecognizer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeEventsDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeFlywheel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeFlywheel'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeFlywheelIteration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127DescribeResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeSentimentDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127DescribeTopicsDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DetectDominantLanguage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DetectEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DetectEntities'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DetectKeyPhrases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DetectPiiEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DetectPiiEntities'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DetectSentiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSentiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DetectSentiment'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DetectSyntax(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectSyntax']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DetectSyntax'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127DetectTargetedSentiment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ImportModel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.ImportModel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ImportModel'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListDatasets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDatasets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListDatasets'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListDocumentClassificationJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListDocumentClassifierSummaries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127ListDocumentClassifiers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListDominantLanguageDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127ListEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListEndpoints'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListEntitiesDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListEntityRecognizerSummaries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListEntityRecognizers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListEventsDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListFlywheelIterationHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListFlywheels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListFlywheels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListFlywheels'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListSentimentDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127ListTargetedSentimentDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127ListTopicsDetectionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127PutResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.PutResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StartDocumentClassificationJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StartDominantLanguageDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127StartEntitiesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StartEventsDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StartFlywheelIteration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StartKeyPhrasesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StartPiiEntitiesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StartSentimentDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StartTargetedSentimentDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127StartTopicsDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StopDominantLanguageDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127StopEntitiesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StopEventsDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StopKeyPhrasesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StopPiiEntitiesDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StopSentimentDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StopTargetedSentimentDetectionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComprehend20171127StopTrainingDocumentClassifier(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127StopTrainingEntityRecognizer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Comprehend_20171127.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127UpdateEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.UpdateEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetComprehend20171127UpdateFlywheel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Comprehend_20171127.UpdateFlywheel'].$post(args, options),
  )
}
