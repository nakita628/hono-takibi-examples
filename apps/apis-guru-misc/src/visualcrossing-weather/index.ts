import { OpenAPIHono } from '@hono/zod-openapi'
import { visualCrossingWebServicesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', visualCrossingWebServicesHandler)

export default app
