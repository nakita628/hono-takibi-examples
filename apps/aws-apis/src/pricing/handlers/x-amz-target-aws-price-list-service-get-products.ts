import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPriceListServiceGetProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPriceListServiceGetProductsHandler = app.openapi(
  postXAmzTargetAWSPriceListServiceGetProductsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
