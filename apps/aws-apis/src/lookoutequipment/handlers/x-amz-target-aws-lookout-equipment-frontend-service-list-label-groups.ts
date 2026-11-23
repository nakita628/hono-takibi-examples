import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceListLabelGroupsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
