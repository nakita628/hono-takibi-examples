import { OpenAPIHono } from '@hono/zod-openapi'
import { v1betaEstimateCostScenarioHandler, v1betaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1betaHandler).route('/', v1betaEstimateCostScenarioHandler)

export default app
