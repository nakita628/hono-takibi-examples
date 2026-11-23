import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1betaEstimateCostScenarioRoute } from '../routes'

const app = new OpenAPIHono()

export const v1betaEstimateCostScenarioHandler = app.openapi(
  postV1betaEstimateCostScenarioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
