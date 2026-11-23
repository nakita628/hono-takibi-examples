import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCommunicationRoute,
  postEkmanEmotionRoute,
  postEmotionRoute,
  postLanguageDetectionRoute,
  postPersonalityRoute,
  postSentimentRoute,
  postTopicSentimentRoute,
} from './routes'
import {
  postCommunicationRouteHandler,
  postEkmanEmotionRouteHandler,
  postEmotionRouteHandler,
  postLanguageDetectionRouteHandler,
  postPersonalityRouteHandler,
  postSentimentRouteHandler,
  postTopicSentimentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCommunicationRoute, postCommunicationRouteHandler)
  .openapi(postEkmanEmotionRoute, postEkmanEmotionRouteHandler)
  .openapi(postEmotionRoute, postEmotionRouteHandler)
  .openapi(postLanguageDetectionRoute, postLanguageDetectionRouteHandler)
  .openapi(postPersonalityRoute, postPersonalityRouteHandler)
  .openapi(postSentimentRoute, postSentimentRouteHandler)
  .openapi(postTopicSentimentRoute, postTopicSentimentRouteHandler)

export default app
