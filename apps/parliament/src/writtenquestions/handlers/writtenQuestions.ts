import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiWrittenquestionsQuestionsDateUinRoute,
  getApiWrittenquestionsQuestionsIdRoute,
  getApiWrittenquestionsQuestionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const writtenQuestionsHandler = app
  .openapi(getApiWrittenquestionsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenquestionsQuestionsDateUinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenquestionsQuestionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
