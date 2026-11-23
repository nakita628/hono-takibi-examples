import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appPackagesHandler,
  onboardedAppPackagesHandler,
  subscriptionsHandler,
  userDefinedNotificationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appPackagesHandler)
  .route('/', onboardedAppPackagesHandler)
  .route('/', subscriptionsHandler)
  .route('/', userDefinedNotificationHandler)

export default app
