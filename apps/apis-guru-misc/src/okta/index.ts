import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  createUserHandler,
  credentialOperationsHandler,
  lifecycleOperationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', createUserHandler)
  .route('/', credentialOperationsHandler)
  .route('/', lifecycleOperationsHandler)

export default app
