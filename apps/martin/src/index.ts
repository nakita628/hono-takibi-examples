import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cacheHandler,
  catalogHandler,
  fontHandler,
  healthHandler,
  ogcHandler,
  sdfSpriteHandler,
  sourceIdsHandler,
  spriteHandler,
  styleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', sourceIdsHandler)
  .route('/', cacheHandler)
  .route('/', catalogHandler)
  .route('/', fontHandler)
  .route('/', healthHandler)
  .route('/', ogcHandler)
  .route('/', sdfSpriteHandler)
  .route('/', spriteHandler)
  .route('/', styleHandler)

export default app
