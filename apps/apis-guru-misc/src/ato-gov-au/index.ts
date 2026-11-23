import { OpenAPIHono } from '@hono/zod-openapi'
import {
  businessNamesHandler,
  classificationsHandler,
  individualsHandler,
  licensesHandler,
  organisationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', businessNamesHandler)
  .route('/', classificationsHandler)
  .route('/', individualsHandler)
  .route('/', licensesHandler)
  .route('/', organisationsHandler)

export default app
