import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCommunicationRoute,
  postEkmanEmotionRoute,
  postEmotionRoute,
  postLanguageDetectionRoute,
  postPersonalityRoute,
  postSentimentRoute,
  postTopicSentimentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textAnalysisHandler = app
  .openapi(postCommunicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEkmanEmotionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmotionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLanguageDetectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPersonalityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSentimentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTopicSentimentRoute, (c) => {
    throw new Error('Not implemented')
  })
