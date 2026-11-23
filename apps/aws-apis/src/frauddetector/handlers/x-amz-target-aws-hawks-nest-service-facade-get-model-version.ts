import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetModelVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetModelVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetModelVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
