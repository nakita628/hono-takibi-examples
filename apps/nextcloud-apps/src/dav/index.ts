import { OpenAPIHono } from '@hono/zod-openapi'
import {
  calendarExportHandler,
  calendarImportHandler,
  contactsImportHandler,
  directHandler,
  federatedCalendarHandler,
  outOfOfficeHandler,
  upcomingEventsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', directHandler)
  .route('/', federatedCalendarHandler)
  .route('/', upcomingEventsHandler)
  .route('/', outOfOfficeHandler)
  .route('/', calendarExportHandler)
  .route('/', calendarImportHandler)
  .route('/', contactsImportHandler)

export default app
