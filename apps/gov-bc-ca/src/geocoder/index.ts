import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressesOutputFormatHandler,
  intersectionsHandler,
  occupantsHandler,
  parcelsHandler,
  sitesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addressesOutputFormatHandler)
  .route('/', intersectionsHandler)
  .route('/', occupantsHandler)
  .route('/', parcelsHandler)
  .route('/', sitesHandler)

export default app
