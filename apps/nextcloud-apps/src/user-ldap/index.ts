import { OpenAPIHono } from '@hono/zod-openapi'
import { configapiHandler, wizardHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', configapiHandler).route('/', wizardHandler)

export default app
