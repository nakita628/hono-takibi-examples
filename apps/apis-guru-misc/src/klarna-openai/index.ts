import { OpenAPIHono } from '@hono/zod-openapi'
import { openAiProductEndpointHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', openAiProductEndpointHandler)

export default app
