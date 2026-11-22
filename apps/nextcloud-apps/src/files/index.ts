import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  conversionApiHandler,
  directEditingHandler,
  openedHandler,
  openLocalEditorHandler,
  templateHandler,
  transferOwnershipHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', directEditingHandler)
  .route('/', templateHandler)
  .route('/', transferOwnershipHandler)
  .route('/', openLocalEditorHandler)
  .route('/', conversionApiHandler)
  .route('/', openedHandler)

export default app
