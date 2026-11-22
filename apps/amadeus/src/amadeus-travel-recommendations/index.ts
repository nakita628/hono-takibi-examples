import { OpenAPIHono } from '@hono/zod-openapi'
import { recommendedLocationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', recommendedLocationsHandler)

export default app
