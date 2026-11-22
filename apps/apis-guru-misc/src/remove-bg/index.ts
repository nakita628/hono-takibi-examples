import { OpenAPIHono } from '@hono/zod-openapi'
import {
  backgroundRemovalHandler,
  fetchAccountInfoHandler,
  improvementProgramHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', fetchAccountInfoHandler)
  .route('/', improvementProgramHandler)
  .route('/', backgroundRemovalHandler)

export default app
