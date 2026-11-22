import { OpenAPIHono } from '@hono/zod-openapi'
import { eventsV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', eventsV1Handler)

export default app
