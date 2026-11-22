import { OpenAPIHono } from '@hono/zod-openapi'
import { ratingHandler, reviewHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ratingHandler).route('/', reviewHandler)

export default app
