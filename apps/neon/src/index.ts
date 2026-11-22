import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiKeyHandler,
  branchHandler,
  consumptionHandler,
  endpointHandler,
  operationHandler,
  organizationsHandler,
  projectHandler,
  regionHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeyHandler)
  .route('/', operationHandler)
  .route('/', projectHandler)
  .route('/', branchHandler)
  .route('/', endpointHandler)
  .route('/', consumptionHandler)
  .route('/', organizationsHandler)
  .route('/', regionHandler)
  .route('/', usersHandler)

export default app
