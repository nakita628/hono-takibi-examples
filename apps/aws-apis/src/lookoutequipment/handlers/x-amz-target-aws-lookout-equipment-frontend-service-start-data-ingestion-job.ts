import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceStartDataIngestionJobHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
