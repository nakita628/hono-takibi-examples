import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiMeterValuesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const meterValuesHandler = app.openapi(getApiMeterValuesIdRoute, (c) => {
  throw new Error('Not implemented')
})
