import { OpenAPIHono } from '@hono/zod-openapi'
import {
  earlyDayMotionHandler,
  earlyDayMotionsHandler,
  oralquestionsHandler,
  oralquestiontimesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', earlyDayMotionHandler)
  .route('/', earlyDayMotionsHandler)
  .route('/', oralquestionsHandler)
  .route('/', oralquestiontimesHandler)

export default app
