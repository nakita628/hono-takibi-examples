import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetComprehend20171127BatchDetectDominantLanguageHandler,
  XAmzTargetComprehend20171127BatchDetectEntitiesHandler,
  XAmzTargetComprehend20171127BatchDetectKeyPhrasesHandler,
  XAmzTargetComprehend20171127BatchDetectSentimentHandler,
  XAmzTargetComprehend20171127BatchDetectSyntaxHandler,
  XAmzTargetComprehend20171127BatchDetectTargetedSentimentHandler,
  XAmzTargetComprehend20171127ClassifyDocumentHandler,
  XAmzTargetComprehend20171127ContainsPiiEntitiesHandler,
  XAmzTargetComprehend20171127CreateDatasetHandler,
  XAmzTargetComprehend20171127CreateDocumentClassifierHandler,
  XAmzTargetComprehend20171127CreateEndpointHandler,
  XAmzTargetComprehend20171127CreateEntityRecognizerHandler,
  XAmzTargetComprehend20171127CreateFlywheelHandler,
  XAmzTargetComprehend20171127DeleteDocumentClassifierHandler,
  XAmzTargetComprehend20171127DeleteEndpointHandler,
  XAmzTargetComprehend20171127DeleteEntityRecognizerHandler,
  XAmzTargetComprehend20171127DeleteFlywheelHandler,
  XAmzTargetComprehend20171127DeleteResourcePolicyHandler,
  XAmzTargetComprehend20171127DescribeDatasetHandler,
  XAmzTargetComprehend20171127DescribeDocumentClassificationJobHandler,
  XAmzTargetComprehend20171127DescribeDocumentClassifierHandler,
  XAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobHandler,
  XAmzTargetComprehend20171127DescribeEndpointHandler,
  XAmzTargetComprehend20171127DescribeEntitiesDetectionJobHandler,
  XAmzTargetComprehend20171127DescribeEntityRecognizerHandler,
  XAmzTargetComprehend20171127DescribeEventsDetectionJobHandler,
  XAmzTargetComprehend20171127DescribeFlywheelHandler,
  XAmzTargetComprehend20171127DescribeFlywheelIterationHandler,
  XAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobHandler,
  XAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobHandler,
  XAmzTargetComprehend20171127DescribeResourcePolicyHandler,
  XAmzTargetComprehend20171127DescribeSentimentDetectionJobHandler,
  XAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobHandler,
  XAmzTargetComprehend20171127DescribeTopicsDetectionJobHandler,
  XAmzTargetComprehend20171127DetectDominantLanguageHandler,
  XAmzTargetComprehend20171127DetectEntitiesHandler,
  XAmzTargetComprehend20171127DetectKeyPhrasesHandler,
  XAmzTargetComprehend20171127DetectPiiEntitiesHandler,
  XAmzTargetComprehend20171127DetectSentimentHandler,
  XAmzTargetComprehend20171127DetectSyntaxHandler,
  XAmzTargetComprehend20171127DetectTargetedSentimentHandler,
  XAmzTargetComprehend20171127ImportModelHandler,
  XAmzTargetComprehend20171127ListDatasetsHandler,
  XAmzTargetComprehend20171127ListDocumentClassificationJobsHandler,
  XAmzTargetComprehend20171127ListDocumentClassifiersHandler,
  XAmzTargetComprehend20171127ListDocumentClassifierSummariesHandler,
  XAmzTargetComprehend20171127ListDominantLanguageDetectionJobsHandler,
  XAmzTargetComprehend20171127ListEndpointsHandler,
  XAmzTargetComprehend20171127ListEntitiesDetectionJobsHandler,
  XAmzTargetComprehend20171127ListEntityRecognizersHandler,
  XAmzTargetComprehend20171127ListEntityRecognizerSummariesHandler,
  XAmzTargetComprehend20171127ListEventsDetectionJobsHandler,
  XAmzTargetComprehend20171127ListFlywheelIterationHistoryHandler,
  XAmzTargetComprehend20171127ListFlywheelsHandler,
  XAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsHandler,
  XAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsHandler,
  XAmzTargetComprehend20171127ListSentimentDetectionJobsHandler,
  XAmzTargetComprehend20171127ListTagsForResourceHandler,
  XAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsHandler,
  XAmzTargetComprehend20171127ListTopicsDetectionJobsHandler,
  XAmzTargetComprehend20171127PutResourcePolicyHandler,
  XAmzTargetComprehend20171127StartDocumentClassificationJobHandler,
  XAmzTargetComprehend20171127StartDominantLanguageDetectionJobHandler,
  XAmzTargetComprehend20171127StartEntitiesDetectionJobHandler,
  XAmzTargetComprehend20171127StartEventsDetectionJobHandler,
  XAmzTargetComprehend20171127StartFlywheelIterationHandler,
  XAmzTargetComprehend20171127StartKeyPhrasesDetectionJobHandler,
  XAmzTargetComprehend20171127StartPiiEntitiesDetectionJobHandler,
  XAmzTargetComprehend20171127StartSentimentDetectionJobHandler,
  XAmzTargetComprehend20171127StartTargetedSentimentDetectionJobHandler,
  XAmzTargetComprehend20171127StartTopicsDetectionJobHandler,
  XAmzTargetComprehend20171127StopDominantLanguageDetectionJobHandler,
  XAmzTargetComprehend20171127StopEntitiesDetectionJobHandler,
  XAmzTargetComprehend20171127StopEventsDetectionJobHandler,
  XAmzTargetComprehend20171127StopKeyPhrasesDetectionJobHandler,
  XAmzTargetComprehend20171127StopPiiEntitiesDetectionJobHandler,
  XAmzTargetComprehend20171127StopSentimentDetectionJobHandler,
  XAmzTargetComprehend20171127StopTargetedSentimentDetectionJobHandler,
  XAmzTargetComprehend20171127StopTrainingDocumentClassifierHandler,
  XAmzTargetComprehend20171127StopTrainingEntityRecognizerHandler,
  XAmzTargetComprehend20171127TagResourceHandler,
  XAmzTargetComprehend20171127UntagResourceHandler,
  XAmzTargetComprehend20171127UpdateEndpointHandler,
  XAmzTargetComprehend20171127UpdateFlywheelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetComprehend20171127BatchDetectDominantLanguageHandler)
  .route('/', XAmzTargetComprehend20171127BatchDetectEntitiesHandler)
  .route('/', XAmzTargetComprehend20171127BatchDetectKeyPhrasesHandler)
  .route('/', XAmzTargetComprehend20171127BatchDetectSentimentHandler)
  .route('/', XAmzTargetComprehend20171127BatchDetectSyntaxHandler)
  .route('/', XAmzTargetComprehend20171127BatchDetectTargetedSentimentHandler)
  .route('/', XAmzTargetComprehend20171127ClassifyDocumentHandler)
  .route('/', XAmzTargetComprehend20171127ContainsPiiEntitiesHandler)
  .route('/', XAmzTargetComprehend20171127CreateDatasetHandler)
  .route('/', XAmzTargetComprehend20171127CreateDocumentClassifierHandler)
  .route('/', XAmzTargetComprehend20171127CreateEndpointHandler)
  .route('/', XAmzTargetComprehend20171127CreateEntityRecognizerHandler)
  .route('/', XAmzTargetComprehend20171127CreateFlywheelHandler)
  .route('/', XAmzTargetComprehend20171127DeleteDocumentClassifierHandler)
  .route('/', XAmzTargetComprehend20171127DeleteEndpointHandler)
  .route('/', XAmzTargetComprehend20171127DeleteEntityRecognizerHandler)
  .route('/', XAmzTargetComprehend20171127DeleteFlywheelHandler)
  .route('/', XAmzTargetComprehend20171127DeleteResourcePolicyHandler)
  .route('/', XAmzTargetComprehend20171127DescribeDatasetHandler)
  .route('/', XAmzTargetComprehend20171127DescribeDocumentClassificationJobHandler)
  .route('/', XAmzTargetComprehend20171127DescribeDocumentClassifierHandler)
  .route('/', XAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127DescribeEndpointHandler)
  .route('/', XAmzTargetComprehend20171127DescribeEntitiesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127DescribeEntityRecognizerHandler)
  .route('/', XAmzTargetComprehend20171127DescribeEventsDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127DescribeFlywheelHandler)
  .route('/', XAmzTargetComprehend20171127DescribeFlywheelIterationHandler)
  .route('/', XAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127DescribeResourcePolicyHandler)
  .route('/', XAmzTargetComprehend20171127DescribeSentimentDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127DescribeTopicsDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127DetectDominantLanguageHandler)
  .route('/', XAmzTargetComprehend20171127DetectEntitiesHandler)
  .route('/', XAmzTargetComprehend20171127DetectKeyPhrasesHandler)
  .route('/', XAmzTargetComprehend20171127DetectPiiEntitiesHandler)
  .route('/', XAmzTargetComprehend20171127DetectSentimentHandler)
  .route('/', XAmzTargetComprehend20171127DetectSyntaxHandler)
  .route('/', XAmzTargetComprehend20171127DetectTargetedSentimentHandler)
  .route('/', XAmzTargetComprehend20171127ImportModelHandler)
  .route('/', XAmzTargetComprehend20171127ListDatasetsHandler)
  .route('/', XAmzTargetComprehend20171127ListDocumentClassificationJobsHandler)
  .route('/', XAmzTargetComprehend20171127ListDocumentClassifierSummariesHandler)
  .route('/', XAmzTargetComprehend20171127ListDocumentClassifiersHandler)
  .route('/', XAmzTargetComprehend20171127ListDominantLanguageDetectionJobsHandler)
  .route('/', XAmzTargetComprehend20171127ListEndpointsHandler)
  .route('/', XAmzTargetComprehend20171127ListEntitiesDetectionJobsHandler)
  .route('/', XAmzTargetComprehend20171127ListEntityRecognizerSummariesHandler)
  .route('/', XAmzTargetComprehend20171127ListEntityRecognizersHandler)
  .route('/', XAmzTargetComprehend20171127ListEventsDetectionJobsHandler)
  .route('/', XAmzTargetComprehend20171127ListFlywheelIterationHistoryHandler)
  .route('/', XAmzTargetComprehend20171127ListFlywheelsHandler)
  .route('/', XAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsHandler)
  .route('/', XAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsHandler)
  .route('/', XAmzTargetComprehend20171127ListSentimentDetectionJobsHandler)
  .route('/', XAmzTargetComprehend20171127ListTagsForResourceHandler)
  .route('/', XAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsHandler)
  .route('/', XAmzTargetComprehend20171127ListTopicsDetectionJobsHandler)
  .route('/', XAmzTargetComprehend20171127PutResourcePolicyHandler)
  .route('/', XAmzTargetComprehend20171127StartDocumentClassificationJobHandler)
  .route('/', XAmzTargetComprehend20171127StartDominantLanguageDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StartEntitiesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StartEventsDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StartFlywheelIterationHandler)
  .route('/', XAmzTargetComprehend20171127StartKeyPhrasesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StartPiiEntitiesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StartSentimentDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StartTargetedSentimentDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StartTopicsDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StopDominantLanguageDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StopEntitiesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StopEventsDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StopKeyPhrasesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StopPiiEntitiesDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StopSentimentDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StopTargetedSentimentDetectionJobHandler)
  .route('/', XAmzTargetComprehend20171127StopTrainingDocumentClassifierHandler)
  .route('/', XAmzTargetComprehend20171127StopTrainingEntityRecognizerHandler)
  .route('/', XAmzTargetComprehend20171127TagResourceHandler)
  .route('/', XAmzTargetComprehend20171127UntagResourceHandler)
  .route('/', XAmzTargetComprehend20171127UpdateEndpointHandler)
  .route('/', XAmzTargetComprehend20171127UpdateFlywheelHandler)

export default app
