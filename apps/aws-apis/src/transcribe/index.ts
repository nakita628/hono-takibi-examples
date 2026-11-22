import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetTranscribeCreateCallAnalyticsCategoryHandler,
  XAmzTargetTranscribeCreateLanguageModelHandler,
  XAmzTargetTranscribeCreateMedicalVocabularyHandler,
  XAmzTargetTranscribeCreateVocabularyFilterHandler,
  XAmzTargetTranscribeCreateVocabularyHandler,
  XAmzTargetTranscribeDeleteCallAnalyticsCategoryHandler,
  XAmzTargetTranscribeDeleteCallAnalyticsJobHandler,
  XAmzTargetTranscribeDeleteLanguageModelHandler,
  XAmzTargetTranscribeDeleteMedicalTranscriptionJobHandler,
  XAmzTargetTranscribeDeleteMedicalVocabularyHandler,
  XAmzTargetTranscribeDeleteTranscriptionJobHandler,
  XAmzTargetTranscribeDeleteVocabularyFilterHandler,
  XAmzTargetTranscribeDeleteVocabularyHandler,
  XAmzTargetTranscribeDescribeLanguageModelHandler,
  XAmzTargetTranscribeGetCallAnalyticsCategoryHandler,
  XAmzTargetTranscribeGetCallAnalyticsJobHandler,
  XAmzTargetTranscribeGetMedicalTranscriptionJobHandler,
  XAmzTargetTranscribeGetMedicalVocabularyHandler,
  XAmzTargetTranscribeGetTranscriptionJobHandler,
  XAmzTargetTranscribeGetVocabularyFilterHandler,
  XAmzTargetTranscribeGetVocabularyHandler,
  XAmzTargetTranscribeListCallAnalyticsCategoriesHandler,
  XAmzTargetTranscribeListCallAnalyticsJobsHandler,
  XAmzTargetTranscribeListLanguageModelsHandler,
  XAmzTargetTranscribeListMedicalTranscriptionJobsHandler,
  XAmzTargetTranscribeListMedicalVocabulariesHandler,
  XAmzTargetTranscribeListTagsForResourceHandler,
  XAmzTargetTranscribeListTranscriptionJobsHandler,
  XAmzTargetTranscribeListVocabulariesHandler,
  XAmzTargetTranscribeListVocabularyFiltersHandler,
  XAmzTargetTranscribeStartCallAnalyticsJobHandler,
  XAmzTargetTranscribeStartMedicalTranscriptionJobHandler,
  XAmzTargetTranscribeStartTranscriptionJobHandler,
  XAmzTargetTranscribeTagResourceHandler,
  XAmzTargetTranscribeUntagResourceHandler,
  XAmzTargetTranscribeUpdateCallAnalyticsCategoryHandler,
  XAmzTargetTranscribeUpdateMedicalVocabularyHandler,
  XAmzTargetTranscribeUpdateVocabularyFilterHandler,
  XAmzTargetTranscribeUpdateVocabularyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetTranscribeCreateCallAnalyticsCategoryHandler)
  .route('/', XAmzTargetTranscribeCreateLanguageModelHandler)
  .route('/', XAmzTargetTranscribeCreateMedicalVocabularyHandler)
  .route('/', XAmzTargetTranscribeCreateVocabularyHandler)
  .route('/', XAmzTargetTranscribeCreateVocabularyFilterHandler)
  .route('/', XAmzTargetTranscribeDeleteCallAnalyticsCategoryHandler)
  .route('/', XAmzTargetTranscribeDeleteCallAnalyticsJobHandler)
  .route('/', XAmzTargetTranscribeDeleteLanguageModelHandler)
  .route('/', XAmzTargetTranscribeDeleteMedicalTranscriptionJobHandler)
  .route('/', XAmzTargetTranscribeDeleteMedicalVocabularyHandler)
  .route('/', XAmzTargetTranscribeDeleteTranscriptionJobHandler)
  .route('/', XAmzTargetTranscribeDeleteVocabularyHandler)
  .route('/', XAmzTargetTranscribeDeleteVocabularyFilterHandler)
  .route('/', XAmzTargetTranscribeDescribeLanguageModelHandler)
  .route('/', XAmzTargetTranscribeGetCallAnalyticsCategoryHandler)
  .route('/', XAmzTargetTranscribeGetCallAnalyticsJobHandler)
  .route('/', XAmzTargetTranscribeGetMedicalTranscriptionJobHandler)
  .route('/', XAmzTargetTranscribeGetMedicalVocabularyHandler)
  .route('/', XAmzTargetTranscribeGetTranscriptionJobHandler)
  .route('/', XAmzTargetTranscribeGetVocabularyHandler)
  .route('/', XAmzTargetTranscribeGetVocabularyFilterHandler)
  .route('/', XAmzTargetTranscribeListCallAnalyticsCategoriesHandler)
  .route('/', XAmzTargetTranscribeListCallAnalyticsJobsHandler)
  .route('/', XAmzTargetTranscribeListLanguageModelsHandler)
  .route('/', XAmzTargetTranscribeListMedicalTranscriptionJobsHandler)
  .route('/', XAmzTargetTranscribeListMedicalVocabulariesHandler)
  .route('/', XAmzTargetTranscribeListTagsForResourceHandler)
  .route('/', XAmzTargetTranscribeListTranscriptionJobsHandler)
  .route('/', XAmzTargetTranscribeListVocabulariesHandler)
  .route('/', XAmzTargetTranscribeListVocabularyFiltersHandler)
  .route('/', XAmzTargetTranscribeStartCallAnalyticsJobHandler)
  .route('/', XAmzTargetTranscribeStartMedicalTranscriptionJobHandler)
  .route('/', XAmzTargetTranscribeStartTranscriptionJobHandler)
  .route('/', XAmzTargetTranscribeTagResourceHandler)
  .route('/', XAmzTargetTranscribeUntagResourceHandler)
  .route('/', XAmzTargetTranscribeUpdateCallAnalyticsCategoryHandler)
  .route('/', XAmzTargetTranscribeUpdateMedicalVocabularyHandler)
  .route('/', XAmzTargetTranscribeUpdateVocabularyHandler)
  .route('/', XAmzTargetTranscribeUpdateVocabularyFilterHandler)

export default app
