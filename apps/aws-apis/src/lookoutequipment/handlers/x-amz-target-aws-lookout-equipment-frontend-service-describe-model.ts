import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeModelHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
