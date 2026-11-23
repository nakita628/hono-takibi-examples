import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteDatasetHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
