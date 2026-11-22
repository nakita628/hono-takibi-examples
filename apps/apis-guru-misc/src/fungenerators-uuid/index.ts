import { OpenAPIHono } from '@hono/zod-openapi'
import { uuidGenerationHandler, uuidParsingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', uuidGenerationHandler).route('/', uuidParsingHandler)

export default app
