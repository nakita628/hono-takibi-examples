import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPriceListServiceGetProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPriceListServiceGetProductsHandler = app.openapi(
  postXAmzTargetAWSPriceListServiceGetProductsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
