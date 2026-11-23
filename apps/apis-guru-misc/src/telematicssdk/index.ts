import { OpenAPIHono } from '@hono/zod-openapi'
import { mobilesdkHandler, statisticsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mobilesdkHandler).route('/', statisticsHandler)

export default app
