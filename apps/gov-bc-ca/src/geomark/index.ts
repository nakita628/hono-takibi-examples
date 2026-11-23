import { OpenAPIHono } from '@hono/zod-openapi'
import { geomarksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', geomarksHandler)

export default app
