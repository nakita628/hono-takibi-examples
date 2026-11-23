import { OpenAPIHono } from '@hono/zod-openapi'
import { vaultHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vaultHandler)

export default app
