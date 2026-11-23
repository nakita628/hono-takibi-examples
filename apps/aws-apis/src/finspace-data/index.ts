import { OpenAPIHono } from '@hono/zod-openapi'
import {
  credentialsHandler,
  datasetsHandler,
  datasetsv2Handler,
  permissionGroupHandler,
  permissionGroupMaxResultsHandler,
  userHandler,
  userMaxResultsHandler,
  workingLocationV1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', permissionGroupHandler)
  .route('/', datasetsHandler)
  .route('/', datasetsv2Handler)
  .route('/', userHandler)
  .route('/', credentialsHandler)
  .route('/', workingLocationV1Handler)
  .route('/', permissionGroupMaxResultsHandler)
  .route('/', userMaxResultsHandler)

export default app
