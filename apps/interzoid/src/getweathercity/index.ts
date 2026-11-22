import { OpenAPIHono } from '@hono/zod-openapi'
import { weatherByCityAndStateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', weatherByCityAndStateHandler)

export default app
