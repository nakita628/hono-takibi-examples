import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDailyreportsDailyreportsRoute,
  getApiWrittenquestionsQuestionsDateUinRoute,
  getApiWrittenquestionsQuestionsIdRoute,
  getApiWrittenquestionsQuestionsRoute,
  getApiWrittenstatementsStatementsDateUinRoute,
  getApiWrittenstatementsStatementsIdRoute,
  getApiWrittenstatementsStatementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiDailyreportsDailyreportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenquestionsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenquestionsQuestionsDateUinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenquestionsQuestionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenstatementsStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenstatementsStatementsDateUinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenstatementsStatementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
