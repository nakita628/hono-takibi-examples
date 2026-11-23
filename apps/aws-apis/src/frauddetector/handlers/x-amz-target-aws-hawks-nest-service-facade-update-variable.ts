import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateVariableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeUpdateVariableHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateVariableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
