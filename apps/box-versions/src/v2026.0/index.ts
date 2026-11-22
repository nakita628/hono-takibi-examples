import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aiSessionsHandler,
  automateWorkflowsHandler,
  convertToBoxNoteHandler,
  documentSplitHandler,
  queryHandler,
  shuttleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', automateWorkflowsHandler)
  .route('/', convertToBoxNoteHandler)
  .route('/', documentSplitHandler)
  .route('/', queryHandler)
  .route('/', shuttleHandler)
  .route('/', aiSessionsHandler)

export default app
