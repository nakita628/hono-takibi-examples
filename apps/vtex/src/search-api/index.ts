import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, buscaautocompleteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', buscaautocompleteHandler)

export default app
