import { OpenAPIHono } from '@hono/zod-openapi'
import {
  districtHandler,
  eventHandler,
  listHandler,
  matchHandler,
  tbaHandler,
  teamHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', districtHandler)
  .route('/', eventHandler)
  .route('/', matchHandler)
  .route('/', tbaHandler)
  .route('/', teamHandler)
  .route('/', listHandler)

export default app
