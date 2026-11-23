import { OpenAPIHono } from '@hono/zod-openapi'
import { xAmzTargetQldbSessionSendCommandHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', xAmzTargetQldbSessionSendCommandHandler)

export default app
