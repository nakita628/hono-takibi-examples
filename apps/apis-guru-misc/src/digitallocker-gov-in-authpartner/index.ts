import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountDetailAPIHandler,
  authorizationAPIHandler,
  authorizationHandler,
  digiLockerMetaAPIsHandler,
  digiLockerSignUpAPIsHandler,
  fileAPIsHandler,
  tokenRevocationAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', digiLockerMetaAPIsHandler)
  .route('/', authorizationHandler)
  .route('/', authorizationAPIHandler)
  .route('/', fileAPIsHandler)
  .route('/', tokenRevocationAPIHandler)
  .route('/', accountDetailAPIHandler)
  .route('/', digiLockerSignUpAPIsHandler)

export default app
