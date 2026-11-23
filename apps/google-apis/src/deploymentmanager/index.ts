import { OpenAPIHono } from '@hono/zod-openapi'
import { deploymentmanagerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', deploymentmanagerHandler)

export default app
