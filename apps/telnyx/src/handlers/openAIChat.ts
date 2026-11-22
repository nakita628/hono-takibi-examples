import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAiOpenaiModelsRoute,
  postAiOpenaiChatCompletionsRoute,
  postAiOpenaiResponsesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const openAIChatHandler = app
  .openapi(postAiOpenaiChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiOpenaiModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiOpenaiResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
