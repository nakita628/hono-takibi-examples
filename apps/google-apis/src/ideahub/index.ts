import { OpenAPIHono } from '@hono/zod-openapi'
import { ideasHandler, platformsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ideasHandler).route('/', platformsHandler)

export default app
