import { OpenAPIHono } from '@hono/zod-openapi'
import { contactGroupsHandler, otherContactsHandler, peopleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', contactGroupsHandler)
  .route('/', otherContactsHandler)
  .route('/', peopleHandler)

export default app
