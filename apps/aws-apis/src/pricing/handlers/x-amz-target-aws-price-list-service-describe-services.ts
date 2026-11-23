import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPriceListServiceDescribeServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPriceListServiceDescribeServicesHandler = app.openapi(
  postXAmzTargetAWSPriceListServiceDescribeServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
