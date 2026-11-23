import { OpenAPIHono } from '@hono/zod-openapi'
import { micerHandler, pvcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', micerHandler).route('/', pvcerHandler)

export default app
