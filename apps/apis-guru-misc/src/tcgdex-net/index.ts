import { OpenAPIHono } from '@hono/zod-openapi'
import { cardsHandler, filtersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cardsHandler).route('/', filtersHandler)

export default app
