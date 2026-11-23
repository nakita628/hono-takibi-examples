import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  approvalsHandler,
  codeHandler,
  toolsHandler,
  uploadUrlHandler,
  v1Handler,
  v2Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v2Handler)
  .route('/', toolsHandler)
  .route('/', codeHandler)
  .route('/', approvalsHandler)
  .route('/', v1Handler)
  .route('/', apiHandler)
  .route('/', uploadUrlHandler)

export default app
