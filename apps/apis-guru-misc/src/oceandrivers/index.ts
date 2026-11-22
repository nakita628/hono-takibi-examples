import { OpenAPIHono } from '@hono/zod-openapi'
import { odWeatherHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', odWeatherHandler)

export default app
