import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetLabelsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
