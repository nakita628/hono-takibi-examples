import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPriceListServiceGetPriceListFileUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPriceListServiceGetPriceListFileUrlHandler = app.openapi(
  postXAmzTargetAWSPriceListServiceGetPriceListFileUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
