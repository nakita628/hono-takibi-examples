import { OpenAPIHono } from '@hono/zod-openapi'
import {
  administrativeHandler,
  billingHandler,
  clinicalHandler,
  practiceManagementHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clinicalHandler)
  .route('/', billingHandler)
  .route('/', administrativeHandler)
  .route('/', practiceManagementHandler)

export default app
