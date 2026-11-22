import { OpenAPIHono } from '@hono/zod-openapi'
import { vehicleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vehicleHandler)

export default app
