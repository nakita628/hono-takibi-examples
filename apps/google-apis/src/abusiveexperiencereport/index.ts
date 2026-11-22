import { OpenAPIHono } from '@hono/zod-openapi'
import { sitesHandler, violatingSitesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', violatingSitesHandler).route('/', sitesHandler)

export default app
