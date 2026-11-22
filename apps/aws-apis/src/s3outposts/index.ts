import { OpenAPIHono } from '@hono/zod-openapi'
import { S3OutpostsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', S3OutpostsHandler)

export default app
