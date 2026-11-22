import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPriceListServiceDescribeServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPriceListServiceDescribeServicesHandler = app.openapi(
  postXAmzTargetAWSPriceListServiceDescribeServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
