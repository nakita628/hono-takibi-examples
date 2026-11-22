import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSupport20130415DescribeServicesHandler = app.openapi(
  postXAmzTargetAWSSupport20130415DescribeServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
