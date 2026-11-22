import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assetsHandler,
  customerHandler,
  infoHandler,
  knowledgebaseHandler,
  organizationHandler,
  requestHandler,
  requesttypeHandler,
  restHandler,
  servicedeskHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assetsHandler)
  .route('/', customerHandler)
  .route('/', restHandler)
  .route('/', infoHandler)
  .route('/', knowledgebaseHandler)
  .route('/', organizationHandler)
  .route('/', requestHandler)
  .route('/', requesttypeHandler)
  .route('/', servicedeskHandler)

export default app
