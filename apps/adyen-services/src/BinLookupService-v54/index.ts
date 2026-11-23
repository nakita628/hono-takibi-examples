import { OpenAPIHono } from '@hono/zod-openapi'
import { get3dsAvailabilityHandler, getCostEstimateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', get3dsAvailabilityHandler).route('/', getCostEstimateHandler)

export default app
