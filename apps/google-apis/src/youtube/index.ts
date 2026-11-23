import { OpenAPIHono } from '@hono/zod-openapi'
import { youtubeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', youtubeHandler)

export default app
