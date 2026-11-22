import { OpenAPIHono } from '@hono/zod-openapi'
import { autocompleteHandler, productListPageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', autocompleteHandler).route('/', productListPageHandler)

export default app
