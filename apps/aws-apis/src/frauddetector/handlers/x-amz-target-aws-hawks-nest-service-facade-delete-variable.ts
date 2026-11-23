import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteVariableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteVariableHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteVariableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
