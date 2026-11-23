import { OpenAPIHono } from '@hono/zod-openapi'
import { appinstallsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appinstallsHandler)

export default app
