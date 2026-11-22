import { OpenAPIHono } from '@hono/zod-openapi'
import {
  boundingBoxHandler,
  createHandler,
  featureHandler,
  infoHandler,
  partsHandler,
  pointHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createHandler)
  .route('/', infoHandler)
  .route('/', boundingBoxHandler)
  .route('/', featureHandler)
  .route('/', partsHandler)
  .route('/', pointHandler)

export default app
