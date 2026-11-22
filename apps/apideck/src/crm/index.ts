import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activitiesHandler,
  companiesHandler,
  contactsHandler,
  leadsHandler,
  notesHandler,
  opportunitiesHandler,
  pipelinesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activitiesHandler)
  .route('/', companiesHandler)
  .route('/', contactsHandler)
  .route('/', leadsHandler)
  .route('/', notesHandler)
  .route('/', opportunitiesHandler)
  .route('/', pipelinesHandler)
  .route('/', usersHandler)

export default app
