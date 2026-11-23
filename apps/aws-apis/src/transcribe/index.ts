import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetTranscribeCreateCallAnalyticsCategoryHandler,
  xAmzTargetTranscribeCreateLanguageModelHandler,
  xAmzTargetTranscribeCreateMedicalVocabularyHandler,
  xAmzTargetTranscribeCreateVocabularyFilterHandler,
  xAmzTargetTranscribeCreateVocabularyHandler,
  xAmzTargetTranscribeDeleteCallAnalyticsCategoryHandler,
  xAmzTargetTranscribeDeleteCallAnalyticsJobHandler,
  xAmzTargetTranscribeDeleteLanguageModelHandler,
  xAmzTargetTranscribeDeleteMedicalTranscriptionJobHandler,
  xAmzTargetTranscribeDeleteMedicalVocabularyHandler,
  xAmzTargetTranscribeDeleteTranscriptionJobHandler,
  xAmzTargetTranscribeDeleteVocabularyFilterHandler,
  xAmzTargetTranscribeDeleteVocabularyHandler,
  xAmzTargetTranscribeDescribeLanguageModelHandler,
  xAmzTargetTranscribeGetCallAnalyticsCategoryHandler,
  xAmzTargetTranscribeGetCallAnalyticsJobHandler,
  xAmzTargetTranscribeGetMedicalTranscriptionJobHandler,
  xAmzTargetTranscribeGetMedicalVocabularyHandler,
  xAmzTargetTranscribeGetTranscriptionJobHandler,
  xAmzTargetTranscribeGetVocabularyFilterHandler,
  xAmzTargetTranscribeGetVocabularyHandler,
  xAmzTargetTranscribeListCallAnalyticsCategoriesHandler,
  xAmzTargetTranscribeListCallAnalyticsJobsHandler,
  xAmzTargetTranscribeListLanguageModelsHandler,
  xAmzTargetTranscribeListMedicalTranscriptionJobsHandler,
  xAmzTargetTranscribeListMedicalVocabulariesHandler,
  xAmzTargetTranscribeListTagsForResourceHandler,
  xAmzTargetTranscribeListTranscriptionJobsHandler,
  xAmzTargetTranscribeListVocabulariesHandler,
  xAmzTargetTranscribeListVocabularyFiltersHandler,
  xAmzTargetTranscribeStartCallAnalyticsJobHandler,
  xAmzTargetTranscribeStartMedicalTranscriptionJobHandler,
  xAmzTargetTranscribeStartTranscriptionJobHandler,
  xAmzTargetTranscribeTagResourceHandler,
  xAmzTargetTranscribeUntagResourceHandler,
  xAmzTargetTranscribeUpdateCallAnalyticsCategoryHandler,
  xAmzTargetTranscribeUpdateMedicalVocabularyHandler,
  xAmzTargetTranscribeUpdateVocabularyFilterHandler,
  xAmzTargetTranscribeUpdateVocabularyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetTranscribeCreateCallAnalyticsCategoryHandler)
  .route('/', xAmzTargetTranscribeCreateLanguageModelHandler)
  .route('/', xAmzTargetTranscribeCreateMedicalVocabularyHandler)
  .route('/', xAmzTargetTranscribeCreateVocabularyHandler)
  .route('/', xAmzTargetTranscribeCreateVocabularyFilterHandler)
  .route('/', xAmzTargetTranscribeDeleteCallAnalyticsCategoryHandler)
  .route('/', xAmzTargetTranscribeDeleteCallAnalyticsJobHandler)
  .route('/', xAmzTargetTranscribeDeleteLanguageModelHandler)
  .route('/', xAmzTargetTranscribeDeleteMedicalTranscriptionJobHandler)
  .route('/', xAmzTargetTranscribeDeleteMedicalVocabularyHandler)
  .route('/', xAmzTargetTranscribeDeleteTranscriptionJobHandler)
  .route('/', xAmzTargetTranscribeDeleteVocabularyHandler)
  .route('/', xAmzTargetTranscribeDeleteVocabularyFilterHandler)
  .route('/', xAmzTargetTranscribeDescribeLanguageModelHandler)
  .route('/', xAmzTargetTranscribeGetCallAnalyticsCategoryHandler)
  .route('/', xAmzTargetTranscribeGetCallAnalyticsJobHandler)
  .route('/', xAmzTargetTranscribeGetMedicalTranscriptionJobHandler)
  .route('/', xAmzTargetTranscribeGetMedicalVocabularyHandler)
  .route('/', xAmzTargetTranscribeGetTranscriptionJobHandler)
  .route('/', xAmzTargetTranscribeGetVocabularyHandler)
  .route('/', xAmzTargetTranscribeGetVocabularyFilterHandler)
  .route('/', xAmzTargetTranscribeListCallAnalyticsCategoriesHandler)
  .route('/', xAmzTargetTranscribeListCallAnalyticsJobsHandler)
  .route('/', xAmzTargetTranscribeListLanguageModelsHandler)
  .route('/', xAmzTargetTranscribeListMedicalTranscriptionJobsHandler)
  .route('/', xAmzTargetTranscribeListMedicalVocabulariesHandler)
  .route('/', xAmzTargetTranscribeListTagsForResourceHandler)
  .route('/', xAmzTargetTranscribeListTranscriptionJobsHandler)
  .route('/', xAmzTargetTranscribeListVocabulariesHandler)
  .route('/', xAmzTargetTranscribeListVocabularyFiltersHandler)
  .route('/', xAmzTargetTranscribeStartCallAnalyticsJobHandler)
  .route('/', xAmzTargetTranscribeStartMedicalTranscriptionJobHandler)
  .route('/', xAmzTargetTranscribeStartTranscriptionJobHandler)
  .route('/', xAmzTargetTranscribeTagResourceHandler)
  .route('/', xAmzTargetTranscribeUntagResourceHandler)
  .route('/', xAmzTargetTranscribeUpdateCallAnalyticsCategoryHandler)
  .route('/', xAmzTargetTranscribeUpdateMedicalVocabularyHandler)
  .route('/', xAmzTargetTranscribeUpdateVocabularyHandler)
  .route('/', xAmzTargetTranscribeUpdateVocabularyFilterHandler)

export default app
