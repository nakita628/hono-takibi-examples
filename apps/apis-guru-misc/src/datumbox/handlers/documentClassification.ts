import { OpenAPIHono } from '@hono/zod-openapi'
import {
  post10AdultContentDetectionJsonRoute,
  post10CommercialDetectionJsonRoute,
  post10EducationalDetectionJsonRoute,
  post10GenderDetectionJsonRoute,
  post10LanguageDetectionJsonRoute,
  post10ReadabilityAssessmentJsonRoute,
  post10SentimentAnalysisJsonRoute,
  post10SpamDetectionJsonRoute,
  post10SubjectivityAnalysisJsonRoute,
  post10TopicClassificationJsonRoute,
  post10TwitterSentimentAnalysisJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentClassificationHandler = app
  .openapi(post10AdultContentDetectionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10CommercialDetectionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10EducationalDetectionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10GenderDetectionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10LanguageDetectionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10ReadabilityAssessmentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10SentimentAnalysisJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10SpamDetectionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10SubjectivityAnalysisJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10TopicClassificationJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10TwitterSentimentAnalysisJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
