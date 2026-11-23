import { OpenAPIHono } from '@hono/zod-openapi'
import { drvlcHandler, rvcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', drvlcHandler).route('/', rvcerHandler)

export default app
