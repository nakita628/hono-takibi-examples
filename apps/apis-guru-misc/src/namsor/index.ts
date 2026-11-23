import { OpenAPIHono } from '@hono/zod-openapi'
import { api2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', api2Handler)

export default app
