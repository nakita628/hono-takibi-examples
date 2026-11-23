import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceDeleteLabelGroupHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
