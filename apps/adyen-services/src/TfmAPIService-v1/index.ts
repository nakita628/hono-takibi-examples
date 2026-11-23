import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assignTerminalsHandler,
  findTerminalHandler,
  getStoresUnderAccountHandler,
  getTerminalDetailsHandler,
  getTerminalsUnderAccountHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assignTerminalsHandler)
  .route('/', findTerminalHandler)
  .route('/', getStoresUnderAccountHandler)
  .route('/', getTerminalDetailsHandler)
  .route('/', getTerminalsUnderAccountHandler)

export default app
