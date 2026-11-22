import { OpenAPIHono } from '@hono/zod-openapi'
import { vcsV1VCSServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vcsV1VCSServiceHandler)

export default app
