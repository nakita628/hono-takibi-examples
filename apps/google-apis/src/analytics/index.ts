import { OpenAPIHono } from '@hono/zod-openapi'
import {
  dataHandler,
  managementHandler,
  metadataHandler,
  provisioningHandler,
  userDeletionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dataHandler)
  .route('/', managementHandler)
  .route('/', metadataHandler)
  .route('/', provisioningHandler)
  .route('/', userDeletionHandler)

export default app
