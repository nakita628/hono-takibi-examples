import { OpenAPIHono } from '@hono/zod-openapi'
import { getChargesSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const chargesSummaryHandler = app.openapi(getChargesSummaryRoute, (c) => {
  throw new Error('Not implemented')
})
