import { OpenAPIHono } from '@hono/zod-openapi'
import { filesHandler, foldersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', filesHandler).route('/', foldersHandler)

export default app
