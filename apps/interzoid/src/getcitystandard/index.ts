import { OpenAPIHono } from '@hono/zod-openapi'
import { cityDataStandardizationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cityDataStandardizationHandler)

export default app
