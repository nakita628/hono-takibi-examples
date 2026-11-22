import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1TopicStatsTopicComputeHeadCursorRoute,
  postV1TopicStatsTopicComputeMessageStatsRoute,
  postV1TopicStatsTopicComputeTimeCursorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const topicStatsHandler = app
  .openapi(postV1TopicStatsTopicComputeHeadCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TopicStatsTopicComputeMessageStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TopicStatsTopicComputeTimeCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
