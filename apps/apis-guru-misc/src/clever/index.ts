import { OpenAPIHono } from '@hono/zod-openapi'
import {
  contactsHandler,
  districtAdminsHandler,
  districtsHandler,
  schoolAdminsHandler,
  schoolsHandler,
  sectionsHandler,
  studentsHandler,
  teachersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', contactsHandler)
  .route('/', districtAdminsHandler)
  .route('/', districtsHandler)
  .route('/', schoolAdminsHandler)
  .route('/', schoolsHandler)
  .route('/', sectionsHandler)
  .route('/', studentsHandler)
  .route('/', teachersHandler)

export default app
