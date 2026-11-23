import { OpenAPIHono } from '@hono/zod-openapi'
import {
  customerServiceMetricTaskHandler,
  inventoryTaskHandler,
  orderTaskHandler,
  scheduleHandler,
  scheduleTemplateHandler,
  taskHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', customerServiceMetricTaskHandler)
  .route('/', inventoryTaskHandler)
  .route('/', orderTaskHandler)
  .route('/', scheduleHandler)
  .route('/', scheduleTemplateHandler)
  .route('/', taskHandler)

export default app
