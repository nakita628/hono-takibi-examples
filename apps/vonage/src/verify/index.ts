import { OpenAPIHono } from '@hono/zod-openapi'
import {
  checkHandler,
  controlHandler,
  fraudManagementHandler,
  psd2Handler,
  requestsHandler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', checkHandler)
  .route('/', controlHandler)
  .route('/', fraudManagementHandler)
  .route('/', psd2Handler)
  .route('/', searchHandler)
  .route('/', requestsHandler)

export default app
