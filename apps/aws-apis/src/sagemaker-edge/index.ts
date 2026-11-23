import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeploymentsHandler,
  getDeviceRegistrationHandler,
  sendHeartbeatHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', getDeploymentsHandler)
  .route('/', getDeviceRegistrationHandler)
  .route('/', sendHeartbeatHandler)

export default app
