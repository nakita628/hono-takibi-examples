import { OpenAPIHono } from '@hono/zod-openapi'
import { enterprisesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', enterprisesHandler)

export default app
