import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectProductRatePlanIdRoute,
  getV1ObjectProductRatePlanIdRoute,
  getV1RateplanProductIdProductRatePlanRoute,
  postV1ObjectProductRatePlanRoute,
  putV1ObjectProductRatePlanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productRatePlansHandler = app
  .openapi(postV1ObjectProductRatePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectProductRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectProductRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RateplanProductIdProductRatePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
