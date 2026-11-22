import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectRatePlanChargeIdRoute, putV1ObjectRatePlanChargeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ratePlanChargesHandler = app
  .openapi(getV1ObjectRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
