import { OpenAPIHono } from '@hono/zod-openapi'
import {
  emailListsAddressesHandler,
  exportHandler,
  messagingHandler,
  subscriptionGroupsHandler,
  templatesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', exportHandler)
  .route('/', messagingHandler)
  .route('/', templatesHandler)
  .route('/', emailListsAddressesHandler)
  .route('/', subscriptionGroupsHandler)

export default app
