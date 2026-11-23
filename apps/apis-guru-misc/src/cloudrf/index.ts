import { OpenAPIHono } from '@hono/zod-openapi'
import {
  archiveHandler,
  areaHandler,
  clutterHandler,
  interferenceHandler,
  meshHandler,
  networkHandler,
  pathHandler,
  pointsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', archiveHandler)
  .route('/', areaHandler)
  .route('/', clutterHandler)
  .route('/', interferenceHandler)
  .route('/', meshHandler)
  .route('/', networkHandler)
  .route('/', pathHandler)
  .route('/', pointsHandler)

export default app
