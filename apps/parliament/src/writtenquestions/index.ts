import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDailyreportsDailyreportsRoute,
  getApiWrittenquestionsQuestionsDateUinRoute,
  getApiWrittenquestionsQuestionsIdRoute,
  getApiWrittenquestionsQuestionsRoute,
  getApiWrittenstatementsStatementsDateUinRoute,
  getApiWrittenstatementsStatementsIdRoute,
  getApiWrittenstatementsStatementsRoute,
} from './routes'
import {
  getApiDailyreportsDailyreportsRouteHandler,
  getApiWrittenquestionsQuestionsDateUinRouteHandler,
  getApiWrittenquestionsQuestionsIdRouteHandler,
  getApiWrittenquestionsQuestionsRouteHandler,
  getApiWrittenstatementsStatementsDateUinRouteHandler,
  getApiWrittenstatementsStatementsIdRouteHandler,
  getApiWrittenstatementsStatementsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiDailyreportsDailyreportsRoute, getApiDailyreportsDailyreportsRouteHandler)
  .openapi(getApiWrittenquestionsQuestionsRoute, getApiWrittenquestionsQuestionsRouteHandler)
  .openapi(
    getApiWrittenquestionsQuestionsDateUinRoute,
    getApiWrittenquestionsQuestionsDateUinRouteHandler,
  )
  .openapi(getApiWrittenquestionsQuestionsIdRoute, getApiWrittenquestionsQuestionsIdRouteHandler)
  .openapi(getApiWrittenstatementsStatementsRoute, getApiWrittenstatementsStatementsRouteHandler)
  .openapi(
    getApiWrittenstatementsStatementsDateUinRoute,
    getApiWrittenstatementsStatementsDateUinRouteHandler,
  )
  .openapi(
    getApiWrittenstatementsStatementsIdRoute,
    getApiWrittenstatementsStatementsIdRouteHandler,
  )

export default app
