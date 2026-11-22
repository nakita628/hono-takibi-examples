import { OpenAPIHono } from '@hono/zod-openapi'
import { earlyDayMotionsHandler, oralQuestionsHandler, oralQuestionTimesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', earlyDayMotionsHandler)
  .route('/', oralQuestionsHandler)
  .route('/', oralQuestionTimesHandler)

export default app
