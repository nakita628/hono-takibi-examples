import { OpenAPIHono } from '@hono/zod-openapi'
import { tagmanagerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', tagmanagerHandler)

export default app
