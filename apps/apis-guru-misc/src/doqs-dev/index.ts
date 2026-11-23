import { OpenAPIHono } from '@hono/zod-openapi'
import { designerHandler, templatesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', designerHandler).route('/', templatesHandler)

export default app
