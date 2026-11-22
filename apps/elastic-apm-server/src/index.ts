import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentConfigHandler,
  eventIntakeHandler,
  opentelemetryIntakeHandler,
  serverInfoHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', serverInfoHandler)
  .route('/', agentConfigHandler)
  .route('/', eventIntakeHandler)
  .route('/', opentelemetryIntakeHandler)

export default app
