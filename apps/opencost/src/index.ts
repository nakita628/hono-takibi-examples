import { OpenAPIHono } from '@hono/zod-openapi'
import {
  allocationHandler,
  assetsHandler,
  cloudCostHandler,
  inferenceCostHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', allocationHandler)
  .route('/', assetsHandler)
  .route('/', cloudCostHandler)
  .route('/', inferenceCostHandler)

export default app
