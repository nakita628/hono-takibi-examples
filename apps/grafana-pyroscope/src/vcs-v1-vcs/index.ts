import { OpenAPIHono } from '@hono/zod-openapi'
import { vcsV1VcsServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vcsV1VcsServiceHandler)

export default app
