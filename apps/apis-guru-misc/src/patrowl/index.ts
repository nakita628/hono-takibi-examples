import { OpenAPIHono } from '@hono/zod-openapi'
import { patrowlEngineHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', patrowlEngineHandler)

export default app
