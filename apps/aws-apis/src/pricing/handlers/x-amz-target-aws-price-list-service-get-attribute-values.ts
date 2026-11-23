import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPriceListServiceGetAttributeValuesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPriceListServiceGetAttributeValuesHandler = app.openapi(
  postXAmzTargetAWSPriceListServiceGetAttributeValuesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
