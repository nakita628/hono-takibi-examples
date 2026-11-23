import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alltrHandler,
  bknocHandler,
  bpcerHandler,
  cfltrHandler,
  lcsagHandler,
  pscerHandler,
  psnocHandler,
  wtrblHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alltrHandler)
  .route('/', bknocHandler)
  .route('/', bpcerHandler)
  .route('/', cfltrHandler)
  .route('/', lcsagHandler)
  .route('/', pscerHandler)
  .route('/', psnocHandler)
  .route('/', wtrblHandler)

export default app
