import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeCreateModelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
