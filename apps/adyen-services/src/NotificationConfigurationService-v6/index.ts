import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createNotificationConfigurationHandler,
  deleteNotificationConfigurationsHandler,
  getNotificationConfigurationHandler,
  getNotificationConfigurationListHandler,
  testNotificationConfigurationHandler,
  updateNotificationConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createNotificationConfigurationHandler)
  .route('/', deleteNotificationConfigurationsHandler)
  .route('/', getNotificationConfigurationHandler)
  .route('/', getNotificationConfigurationListHandler)
  .route('/', testNotificationConfigurationHandler)
  .route('/', updateNotificationConfigurationHandler)

export default app
