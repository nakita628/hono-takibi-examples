import { OpenAPIHono } from '@hono/zod-openapi'
import {
  branchControllerHandler,
  landlordControllerHandler,
  photoControllerHandler,
  propertyControllerHandler,
  sessionControllerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', branchControllerHandler)
  .route('/', landlordControllerHandler)
  .route('/', photoControllerHandler)
  .route('/', propertyControllerHandler)
  .route('/', sessionControllerHandler)

export default app
