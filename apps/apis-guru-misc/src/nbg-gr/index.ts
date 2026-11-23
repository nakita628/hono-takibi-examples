import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountAccessConsentsHandler,
  accountsHandler,
  partyHandler,
  sandboxHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountAccessConsentsHandler)
  .route('/', accountsHandler)
  .route('/', partyHandler)
  .route('/', sandboxHandler)

export default app
