import { OpenAPIHono } from '@hono/zod-openapi'
import { postReviewHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', postReviewHandler)

export default app
