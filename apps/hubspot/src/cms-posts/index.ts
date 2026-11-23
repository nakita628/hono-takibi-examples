import { OpenAPIHono } from '@hono/zod-openapi'
import { cmsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cmsHandler)

export default app
