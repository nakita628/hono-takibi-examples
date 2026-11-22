import { OpenAPIHono } from '@hono/zod-openapi'
import { applicationsHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', applicationsHandler).route('/', tagsHandler)

export default app
