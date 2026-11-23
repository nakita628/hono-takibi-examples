import { OpenAPIHono } from '@hono/zod-openapi'
import { backendHandler, s3BucketsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', backendHandler).route('/', s3BucketsHandler)

export default app
