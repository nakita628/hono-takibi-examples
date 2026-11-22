import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectProductRatePlanChargeIdRoute,
  getV1ObjectProductRatePlanChargeIdRoute,
  postV1ObjectProductRatePlanChargeRoute,
  putV1ObjectProductRatePlanChargeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productRatePlanChargesHandler = app
  .openapi(postV1ObjectProductRatePlanChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectProductRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectProductRatePlanChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
