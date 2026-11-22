import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPriceListServiceGetAttributeValuesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPriceListServiceGetAttributeValuesHandler = app.openapi(
  postXAmzTargetAWSPriceListServiceGetAttributeValuesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
