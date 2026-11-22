import { OpenAPIHono } from '@hono/zod-openapi'
import { ratingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ratingHandler)

export default app
