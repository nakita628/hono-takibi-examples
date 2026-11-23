import { OpenAPIHono } from '@hono/zod-openapi'
import { gamesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', gamesHandler)

export default app
