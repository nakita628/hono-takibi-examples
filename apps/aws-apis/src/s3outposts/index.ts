import { OpenAPIHono } from '@hono/zod-openapi'
import { s3OutpostsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', s3OutpostsHandler)

export default app
