import { OpenAPIHono } from '@hono/zod-openapi'
import { repositoryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', repositoryHandler)

export default app
