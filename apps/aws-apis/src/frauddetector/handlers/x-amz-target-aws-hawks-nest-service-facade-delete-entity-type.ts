import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteEntityTypeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
