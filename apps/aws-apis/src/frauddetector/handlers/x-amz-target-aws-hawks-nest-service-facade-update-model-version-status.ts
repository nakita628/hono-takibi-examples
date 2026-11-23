import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeUpdateModelVersionStatusHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
