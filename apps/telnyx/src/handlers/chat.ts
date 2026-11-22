import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAiModelsRoute,
  postAiChatCompletionsRoute,
  postAiResponsesRoute,
  postAiSummarizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(postAiChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiSummarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
