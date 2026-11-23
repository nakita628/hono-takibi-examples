import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceCreateDatasetHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
