import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activitiesHandler,
  activityTypesHandler,
  membersHandler,
  notesHandler,
  organizationsHandler,
  reportsHandler,
  usersHandler,
  webhooksHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', usersHandler)
  .route('/', workspacesHandler)
  .route('/', activitiesHandler)
  .route('/', activityTypesHandler)
  .route('/', membersHandler)
  .route('/', notesHandler)
  .route('/', organizationsHandler)
  .route('/', reportsHandler)
  .route('/', webhooksHandler)

export default app
