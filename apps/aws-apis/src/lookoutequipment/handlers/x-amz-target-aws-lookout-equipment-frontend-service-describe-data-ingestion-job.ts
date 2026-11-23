import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceDescribeDataIngestionJobHandler =
  app.openapi(
    postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
