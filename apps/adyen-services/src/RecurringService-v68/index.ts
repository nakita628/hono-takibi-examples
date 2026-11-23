import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createPermitHandler,
  disableHandler,
  disablePermitHandler,
  listRecurringDetailsHandler,
  notifyShopperHandler,
  scheduleAccountUpdaterHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createPermitHandler)
  .route('/', disableHandler)
  .route('/', disablePermitHandler)
  .route('/', listRecurringDetailsHandler)
  .route('/', notifyShopperHandler)
  .route('/', scheduleAccountUpdaterHandler)

export default app
