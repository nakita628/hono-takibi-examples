import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteModelVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
