import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateVariableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeCreateVariableHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateVariableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
