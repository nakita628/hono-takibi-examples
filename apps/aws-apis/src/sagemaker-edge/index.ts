import { OpenAPIHono } from '@hono/zod-openapi'
import {
  GetDeploymentsHandler,
  GetDeviceRegistrationHandler,
  SendHeartbeatHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', GetDeploymentsHandler)
  .route('/', GetDeviceRegistrationHandler)
  .route('/', SendHeartbeatHandler)

export default app
