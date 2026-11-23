import { OpenAPIHono } from '@hono/zod-openapi'
import {
  post10AdultContentDetectionJsonRoute,
  post10CommercialDetectionJsonRoute,
  post10DocumentSimilarityJsonRoute,
  post10EducationalDetectionJsonRoute,
  post10GenderDetectionJsonRoute,
  post10KeywordExtractionJsonRoute,
  post10LanguageDetectionJsonRoute,
  post10ReadabilityAssessmentJsonRoute,
  post10SentimentAnalysisJsonRoute,
  post10SpamDetectionJsonRoute,
  post10SubjectivityAnalysisJsonRoute,
  post10TextExtractionJsonRoute,
  post10TopicClassificationJsonRoute,
  post10TwitterSentimentAnalysisJsonRoute,
} from './routes'
import {
  post10AdultContentDetectionJsonRouteHandler,
  post10CommercialDetectionJsonRouteHandler,
  post10DocumentSimilarityJsonRouteHandler,
  post10EducationalDetectionJsonRouteHandler,
  post10GenderDetectionJsonRouteHandler,
  post10KeywordExtractionJsonRouteHandler,
  post10LanguageDetectionJsonRouteHandler,
  post10ReadabilityAssessmentJsonRouteHandler,
  post10SentimentAnalysisJsonRouteHandler,
  post10SpamDetectionJsonRouteHandler,
  post10SubjectivityAnalysisJsonRouteHandler,
  post10TextExtractionJsonRouteHandler,
  post10TopicClassificationJsonRouteHandler,
  post10TwitterSentimentAnalysisJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(post10AdultContentDetectionJsonRoute, post10AdultContentDetectionJsonRouteHandler)
  .openapi(post10CommercialDetectionJsonRoute, post10CommercialDetectionJsonRouteHandler)
  .openapi(post10DocumentSimilarityJsonRoute, post10DocumentSimilarityJsonRouteHandler)
  .openapi(post10EducationalDetectionJsonRoute, post10EducationalDetectionJsonRouteHandler)
  .openapi(post10GenderDetectionJsonRoute, post10GenderDetectionJsonRouteHandler)
  .openapi(post10KeywordExtractionJsonRoute, post10KeywordExtractionJsonRouteHandler)
  .openapi(post10LanguageDetectionJsonRoute, post10LanguageDetectionJsonRouteHandler)
  .openapi(post10ReadabilityAssessmentJsonRoute, post10ReadabilityAssessmentJsonRouteHandler)
  .openapi(post10SentimentAnalysisJsonRoute, post10SentimentAnalysisJsonRouteHandler)
  .openapi(post10SpamDetectionJsonRoute, post10SpamDetectionJsonRouteHandler)
  .openapi(post10SubjectivityAnalysisJsonRoute, post10SubjectivityAnalysisJsonRouteHandler)
  .openapi(post10TextExtractionJsonRoute, post10TextExtractionJsonRouteHandler)
  .openapi(post10TopicClassificationJsonRoute, post10TopicClassificationJsonRouteHandler)
  .openapi(post10TwitterSentimentAnalysisJsonRoute, post10TwitterSentimentAnalysisJsonRouteHandler)

export default app
