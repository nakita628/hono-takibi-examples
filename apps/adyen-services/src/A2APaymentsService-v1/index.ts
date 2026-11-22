import { OpenAPIHono } from '@hono/zod-openapi'
import { iDEALProfilesHandler, paymentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', iDEALProfilesHandler).route('/', paymentsHandler)

export default app
