import { OpenAPIHono } from '@hono/zod-openapi'
import { lookupsHandler, modalFormsHandler, ruleActionsHandler, widgetsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', widgetsHandler)
  .route('/', lookupsHandler)
  .route('/', modalFormsHandler)
  .route('/', ruleActionsHandler)

export default app
