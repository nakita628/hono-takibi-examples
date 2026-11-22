import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectRatePlanChargeTierIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ratePlanChargeTiersHandler = app.openapi(getV1ObjectRatePlanChargeTierIdRoute, (c) => {
  throw new Error('Not implemented')
})
