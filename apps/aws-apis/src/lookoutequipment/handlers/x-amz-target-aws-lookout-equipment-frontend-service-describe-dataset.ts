import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeDatasetHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
