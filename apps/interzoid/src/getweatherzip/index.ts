import { OpenAPIHono } from '@hono/zod-openapi'
import { getweatherzipcodeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getweatherzipcodeHandler)

export default app
