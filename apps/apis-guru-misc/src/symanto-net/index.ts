import { OpenAPIHono } from '@hono/zod-openapi'
import {
  communicationHandler,
  ekmanEmotionHandler,
  emotionHandler,
  languageDetectionHandler,
  personalityHandler,
  sentimentHandler,
  topicSentimentHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', communicationHandler)
  .route('/', ekmanEmotionHandler)
  .route('/', emotionHandler)
  .route('/', languageDetectionHandler)
  .route('/', personalityHandler)
  .route('/', sentimentHandler)
  .route('/', topicSentimentHandler)

export default app
