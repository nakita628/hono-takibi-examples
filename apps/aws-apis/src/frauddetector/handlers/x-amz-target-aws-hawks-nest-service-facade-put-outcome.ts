import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutOutcomeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadePutOutcomeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutOutcomeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
