import { OpenAPIHono } from '@hono/zod-openapi'
import { veteranConfirmationStatusHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', veteranConfirmationStatusHandler)

export default app
