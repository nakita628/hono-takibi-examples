import { OpenAPIHono } from '@hono/zod-openapi'
import { weatherByZipCodeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', weatherByZipCodeHandler)

export default app
