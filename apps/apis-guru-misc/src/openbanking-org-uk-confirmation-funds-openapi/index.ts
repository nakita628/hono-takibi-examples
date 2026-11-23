import { OpenAPIHono } from '@hono/zod-openapi'
import { fundsConfirmationConsentsHandler, fundsConfirmationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', fundsConfirmationConsentsHandler)
  .route('/', fundsConfirmationsHandler)

export default app
