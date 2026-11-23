import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetComprehend20171127BatchDetectDominantLanguageHandler,
  xAmzTargetComprehend20171127BatchDetectEntitiesHandler,
  xAmzTargetComprehend20171127BatchDetectKeyPhrasesHandler,
  xAmzTargetComprehend20171127BatchDetectSentimentHandler,
  xAmzTargetComprehend20171127BatchDetectSyntaxHandler,
  xAmzTargetComprehend20171127BatchDetectTargetedSentimentHandler,
  xAmzTargetComprehend20171127ClassifyDocumentHandler,
  xAmzTargetComprehend20171127ContainsPiiEntitiesHandler,
  xAmzTargetComprehend20171127CreateDatasetHandler,
  xAmzTargetComprehend20171127CreateDocumentClassifierHandler,
  xAmzTargetComprehend20171127CreateEndpointHandler,
  xAmzTargetComprehend20171127CreateEntityRecognizerHandler,
  xAmzTargetComprehend20171127CreateFlywheelHandler,
  xAmzTargetComprehend20171127DeleteDocumentClassifierHandler,
  xAmzTargetComprehend20171127DeleteEndpointHandler,
  xAmzTargetComprehend20171127DeleteEntityRecognizerHandler,
  xAmzTargetComprehend20171127DeleteFlywheelHandler,
  xAmzTargetComprehend20171127DeleteResourcePolicyHandler,
  xAmzTargetComprehend20171127DescribeDatasetHandler,
  xAmzTargetComprehend20171127DescribeDocumentClassificationJobHandler,
  xAmzTargetComprehend20171127DescribeDocumentClassifierHandler,
  xAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobHandler,
  xAmzTargetComprehend20171127DescribeEndpointHandler,
  xAmzTargetComprehend20171127DescribeEntitiesDetectionJobHandler,
  xAmzTargetComprehend20171127DescribeEntityRecognizerHandler,
  xAmzTargetComprehend20171127DescribeEventsDetectionJobHandler,
  xAmzTargetComprehend20171127DescribeFlywheelHandler,
  xAmzTargetComprehend20171127DescribeFlywheelIterationHandler,
  xAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobHandler,
  xAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobHandler,
  xAmzTargetComprehend20171127DescribeResourcePolicyHandler,
  xAmzTargetComprehend20171127DescribeSentimentDetectionJobHandler,
  xAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobHandler,
  xAmzTargetComprehend20171127DescribeTopicsDetectionJobHandler,
  xAmzTargetComprehend20171127DetectDominantLanguageHandler,
  xAmzTargetComprehend20171127DetectEntitiesHandler,
  xAmzTargetComprehend20171127DetectKeyPhrasesHandler,
  xAmzTargetComprehend20171127DetectPiiEntitiesHandler,
  xAmzTargetComprehend20171127DetectSentimentHandler,
  xAmzTargetComprehend20171127DetectSyntaxHandler,
  xAmzTargetComprehend20171127DetectTargetedSentimentHandler,
  xAmzTargetComprehend20171127ImportModelHandler,
  xAmzTargetComprehend20171127ListDatasetsHandler,
  xAmzTargetComprehend20171127ListDocumentClassificationJobsHandler,
  xAmzTargetComprehend20171127ListDocumentClassifiersHandler,
  xAmzTargetComprehend20171127ListDocumentClassifierSummariesHandler,
  xAmzTargetComprehend20171127ListDominantLanguageDetectionJobsHandler,
  xAmzTargetComprehend20171127ListEndpointsHandler,
  xAmzTargetComprehend20171127ListEntitiesDetectionJobsHandler,
  xAmzTargetComprehend20171127ListEntityRecognizersHandler,
  xAmzTargetComprehend20171127ListEntityRecognizerSummariesHandler,
  xAmzTargetComprehend20171127ListEventsDetectionJobsHandler,
  xAmzTargetComprehend20171127ListFlywheelIterationHistoryHandler,
  xAmzTargetComprehend20171127ListFlywheelsHandler,
  xAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsHandler,
  xAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsHandler,
  xAmzTargetComprehend20171127ListSentimentDetectionJobsHandler,
  xAmzTargetComprehend20171127ListTagsForResourceHandler,
  xAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsHandler,
  xAmzTargetComprehend20171127ListTopicsDetectionJobsHandler,
  xAmzTargetComprehend20171127PutResourcePolicyHandler,
  xAmzTargetComprehend20171127StartDocumentClassificationJobHandler,
  xAmzTargetComprehend20171127StartDominantLanguageDetectionJobHandler,
  xAmzTargetComprehend20171127StartEntitiesDetectionJobHandler,
  xAmzTargetComprehend20171127StartEventsDetectionJobHandler,
  xAmzTargetComprehend20171127StartFlywheelIterationHandler,
  xAmzTargetComprehend20171127StartKeyPhrasesDetectionJobHandler,
  xAmzTargetComprehend20171127StartPiiEntitiesDetectionJobHandler,
  xAmzTargetComprehend20171127StartSentimentDetectionJobHandler,
  xAmzTargetComprehend20171127StartTargetedSentimentDetectionJobHandler,
  xAmzTargetComprehend20171127StartTopicsDetectionJobHandler,
  xAmzTargetComprehend20171127StopDominantLanguageDetectionJobHandler,
  xAmzTargetComprehend20171127StopEntitiesDetectionJobHandler,
  xAmzTargetComprehend20171127StopEventsDetectionJobHandler,
  xAmzTargetComprehend20171127StopKeyPhrasesDetectionJobHandler,
  xAmzTargetComprehend20171127StopPiiEntitiesDetectionJobHandler,
  xAmzTargetComprehend20171127StopSentimentDetectionJobHandler,
  xAmzTargetComprehend20171127StopTargetedSentimentDetectionJobHandler,
  xAmzTargetComprehend20171127StopTrainingDocumentClassifierHandler,
  xAmzTargetComprehend20171127StopTrainingEntityRecognizerHandler,
  xAmzTargetComprehend20171127TagResourceHandler,
  xAmzTargetComprehend20171127UntagResourceHandler,
  xAmzTargetComprehend20171127UpdateEndpointHandler,
  xAmzTargetComprehend20171127UpdateFlywheelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetComprehend20171127BatchDetectDominantLanguageHandler)
  .route('/', xAmzTargetComprehend20171127BatchDetectEntitiesHandler)
  .route('/', xAmzTargetComprehend20171127BatchDetectKeyPhrasesHandler)
  .route('/', xAmzTargetComprehend20171127BatchDetectSentimentHandler)
  .route('/', xAmzTargetComprehend20171127BatchDetectSyntaxHandler)
  .route('/', xAmzTargetComprehend20171127BatchDetectTargetedSentimentHandler)
  .route('/', xAmzTargetComprehend20171127ClassifyDocumentHandler)
  .route('/', xAmzTargetComprehend20171127ContainsPiiEntitiesHandler)
  .route('/', xAmzTargetComprehend20171127CreateDatasetHandler)
  .route('/', xAmzTargetComprehend20171127CreateDocumentClassifierHandler)
  .route('/', xAmzTargetComprehend20171127CreateEndpointHandler)
  .route('/', xAmzTargetComprehend20171127CreateEntityRecognizerHandler)
  .route('/', xAmzTargetComprehend20171127CreateFlywheelHandler)
  .route('/', xAmzTargetComprehend20171127DeleteDocumentClassifierHandler)
  .route('/', xAmzTargetComprehend20171127DeleteEndpointHandler)
  .route('/', xAmzTargetComprehend20171127DeleteEntityRecognizerHandler)
  .route('/', xAmzTargetComprehend20171127DeleteFlywheelHandler)
  .route('/', xAmzTargetComprehend20171127DeleteResourcePolicyHandler)
  .route('/', xAmzTargetComprehend20171127DescribeDatasetHandler)
  .route('/', xAmzTargetComprehend20171127DescribeDocumentClassificationJobHandler)
  .route('/', xAmzTargetComprehend20171127DescribeDocumentClassifierHandler)
  .route('/', xAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127DescribeEndpointHandler)
  .route('/', xAmzTargetComprehend20171127DescribeEntitiesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127DescribeEntityRecognizerHandler)
  .route('/', xAmzTargetComprehend20171127DescribeEventsDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127DescribeFlywheelHandler)
  .route('/', xAmzTargetComprehend20171127DescribeFlywheelIterationHandler)
  .route('/', xAmzTargetComprehend20171127DescribeKeyPhrasesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127DescribeResourcePolicyHandler)
  .route('/', xAmzTargetComprehend20171127DescribeSentimentDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127DescribeTargetedSentimentDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127DescribeTopicsDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127DetectDominantLanguageHandler)
  .route('/', xAmzTargetComprehend20171127DetectEntitiesHandler)
  .route('/', xAmzTargetComprehend20171127DetectKeyPhrasesHandler)
  .route('/', xAmzTargetComprehend20171127DetectPiiEntitiesHandler)
  .route('/', xAmzTargetComprehend20171127DetectSentimentHandler)
  .route('/', xAmzTargetComprehend20171127DetectSyntaxHandler)
  .route('/', xAmzTargetComprehend20171127DetectTargetedSentimentHandler)
  .route('/', xAmzTargetComprehend20171127ImportModelHandler)
  .route('/', xAmzTargetComprehend20171127ListDatasetsHandler)
  .route('/', xAmzTargetComprehend20171127ListDocumentClassificationJobsHandler)
  .route('/', xAmzTargetComprehend20171127ListDocumentClassifierSummariesHandler)
  .route('/', xAmzTargetComprehend20171127ListDocumentClassifiersHandler)
  .route('/', xAmzTargetComprehend20171127ListDominantLanguageDetectionJobsHandler)
  .route('/', xAmzTargetComprehend20171127ListEndpointsHandler)
  .route('/', xAmzTargetComprehend20171127ListEntitiesDetectionJobsHandler)
  .route('/', xAmzTargetComprehend20171127ListEntityRecognizerSummariesHandler)
  .route('/', xAmzTargetComprehend20171127ListEntityRecognizersHandler)
  .route('/', xAmzTargetComprehend20171127ListEventsDetectionJobsHandler)
  .route('/', xAmzTargetComprehend20171127ListFlywheelIterationHistoryHandler)
  .route('/', xAmzTargetComprehend20171127ListFlywheelsHandler)
  .route('/', xAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsHandler)
  .route('/', xAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsHandler)
  .route('/', xAmzTargetComprehend20171127ListSentimentDetectionJobsHandler)
  .route('/', xAmzTargetComprehend20171127ListTagsForResourceHandler)
  .route('/', xAmzTargetComprehend20171127ListTargetedSentimentDetectionJobsHandler)
  .route('/', xAmzTargetComprehend20171127ListTopicsDetectionJobsHandler)
  .route('/', xAmzTargetComprehend20171127PutResourcePolicyHandler)
  .route('/', xAmzTargetComprehend20171127StartDocumentClassificationJobHandler)
  .route('/', xAmzTargetComprehend20171127StartDominantLanguageDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StartEntitiesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StartEventsDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StartFlywheelIterationHandler)
  .route('/', xAmzTargetComprehend20171127StartKeyPhrasesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StartPiiEntitiesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StartSentimentDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StartTargetedSentimentDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StartTopicsDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StopDominantLanguageDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StopEntitiesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StopEventsDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StopKeyPhrasesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StopPiiEntitiesDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StopSentimentDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StopTargetedSentimentDetectionJobHandler)
  .route('/', xAmzTargetComprehend20171127StopTrainingDocumentClassifierHandler)
  .route('/', xAmzTargetComprehend20171127StopTrainingEntityRecognizerHandler)
  .route('/', xAmzTargetComprehend20171127TagResourceHandler)
  .route('/', xAmzTargetComprehend20171127UntagResourceHandler)
  .route('/', xAmzTargetComprehend20171127UpdateEndpointHandler)
  .route('/', xAmzTargetComprehend20171127UpdateFlywheelHandler)

export default app
