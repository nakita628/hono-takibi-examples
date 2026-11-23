import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aboutHandler,
  appsHandler,
  changesHandler,
  channelsHandler,
  drivesHandler,
  filesHandler,
  teamdrivesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aboutHandler)
  .route('/', appsHandler)
  .route('/', changesHandler)
  .route('/', channelsHandler)
  .route('/', drivesHandler)
  .route('/', filesHandler)
  .route('/', teamdrivesHandler)

export default app
