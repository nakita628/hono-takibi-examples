import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationsAPIHandler,
  filtersAPIHandler,
  grafanaAPIHandler,
  patternsAPIHandler,
  perfAPIHandler,
  performanceAPIHandler,
  prometheusAPIHandler,
  providersAPIHandler,
  schedulesAPIHandler,
  systemAPIHandler,
  userAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationsAPIHandler)
  .route('/', filtersAPIHandler)
  .route('/', patternsAPIHandler)
  .route('/', perfAPIHandler)
  .route('/', providersAPIHandler)
  .route('/', systemAPIHandler)
  .route('/', prometheusAPIHandler)
  .route('/', grafanaAPIHandler)
  .route('/', userAPIHandler)
  .route('/', performanceAPIHandler)
  .route('/', schedulesAPIHandler)

export default app
