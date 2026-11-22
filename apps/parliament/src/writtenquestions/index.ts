import { OpenAPIHono } from '@hono/zod-openapi'
import { dailyReportsHandler, writtenQuestionsHandler, writtenStatementsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dailyReportsHandler)
  .route('/', writtenQuestionsHandler)
  .route('/', writtenStatementsHandler)

export default app
