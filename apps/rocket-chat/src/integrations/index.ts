import { OpenAPIHono } from '@hono/zod-openapi'
import { integrationHandler, oAuthAppsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', integrationHandler).route('/', oAuthAppsHandler)

export default app
