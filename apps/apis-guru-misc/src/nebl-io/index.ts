import { OpenAPIHono } from '@hono/zod-openapi'
import {
  insightHandler,
  jsonrpcHandler,
  ntp1Handler,
  testnetFaucetHandler,
  testnetInsightHandler,
  testnetNTP1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', jsonrpcHandler)
  .route('/', insightHandler)
  .route('/', ntp1Handler)
  .route('/', testnetFaucetHandler)
  .route('/', testnetInsightHandler)
  .route('/', testnetNTP1Handler)

export default app
