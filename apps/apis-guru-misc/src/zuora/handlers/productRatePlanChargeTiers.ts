import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ObjectProductRatePlanChargeTierIdRoute,
  putV1ObjectProductRatePlanChargeTierIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productRatePlanChargeTiersHandler = app
  .openapi(getV1ObjectProductRatePlanChargeTierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectProductRatePlanChargeTierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
