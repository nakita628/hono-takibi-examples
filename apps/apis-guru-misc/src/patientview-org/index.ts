import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authControllerHandler,
  observationControllerHandler,
  observationHeadingControllerHandler,
  patientControllerHandler,
  patientManagementControllerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authControllerHandler)
  .route('/', patientControllerHandler)
  .route('/', patientManagementControllerHandler)
  .route('/', observationHeadingControllerHandler)
  .route('/', observationControllerHandler)

export default app
