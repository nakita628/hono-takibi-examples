import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteOutcomeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
