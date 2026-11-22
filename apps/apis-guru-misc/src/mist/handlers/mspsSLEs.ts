import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MspsMspIdInsightsMetricRoute } from '../routes'

const app = new OpenAPIHono()

export const mspsSLEsHandler = app.openapi(getApiV1MspsMspIdInsightsMetricRoute, (c) => {
  throw new Error('Not implemented')
})
