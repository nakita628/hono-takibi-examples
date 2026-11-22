import { OpenAPIHono } from '@hono/zod-openapi'
import { videosHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', videosHandler)

export default app
