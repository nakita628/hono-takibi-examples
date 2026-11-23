import { OpenAPIHono } from '@hono/zod-openapi'
import { licerHandler, prcptHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', licerHandler).route('/', prcptHandler)

export default app
