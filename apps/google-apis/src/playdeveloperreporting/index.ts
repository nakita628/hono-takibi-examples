import { OpenAPIHono } from '@hono/zod-openapi'
import { anomaliesHandler, vitalsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vitalsHandler).route('/', anomaliesHandler)

export default app
