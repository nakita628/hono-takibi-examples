import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateVariableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeUpdateVariableHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateVariableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
