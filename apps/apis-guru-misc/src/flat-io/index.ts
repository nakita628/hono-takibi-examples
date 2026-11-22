import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  classHandler,
  collectionHandler,
  groupHandler,
  organizationHandler,
  scoreHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', classHandler)
  .route('/', collectionHandler)
  .route('/', groupHandler)
  .route('/', accountHandler)
  .route('/', organizationHandler)
  .route('/', scoreHandler)
  .route('/', userHandler)

export default app
