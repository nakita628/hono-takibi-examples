import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeUpdateModelVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
