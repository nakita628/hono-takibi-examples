import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateVariableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeCreateVariableHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateVariableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
