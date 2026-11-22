import { OpenAPIHono } from '@hono/zod-openapi'
import { XAmzTargetQLDBSessionSendCommandHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', XAmzTargetQLDBSessionSendCommandHandler)

export default app
