import { OpenAPIHono } from '@hono/zod-openapi'
import {
  businessItemHandler,
  governmentOrganisationHandler,
  seriesMembershipHandler,
  treatyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', businessItemHandler)
  .route('/', governmentOrganisationHandler)
  .route('/', seriesMembershipHandler)
  .route('/', treatyHandler)

export default app
