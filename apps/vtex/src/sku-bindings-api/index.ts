import { OpenAPIHono } from '@hono/zod-openapi'
import { catalogHandler, skuBindingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', catalogHandler).route('/', skuBindingHandler)

export default app
