import { OpenAPIHono } from '@hono/zod-openapi'
import { licenseAssignmentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', licenseAssignmentsHandler)

export default app
