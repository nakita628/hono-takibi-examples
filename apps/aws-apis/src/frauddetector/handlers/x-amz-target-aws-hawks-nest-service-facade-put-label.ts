import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadePutLabelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
