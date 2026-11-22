import { OpenAPIHono } from '@hono/zod-openapi'
import {
  atmHandler,
  bcaHandler,
  branchHandler,
  cccHandler,
  pcaHandler,
  smeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', atmHandler)
  .route('/', branchHandler)
  .route('/', bcaHandler)
  .route('/', cccHandler)
  .route('/', pcaHandler)
  .route('/', smeHandler)

export default app
