import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2betaLimitsLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const limitsHandler = app.openapi(getV2betaLimitsLabelRoute, (c) => {
  throw new Error('Not implemented')
})
