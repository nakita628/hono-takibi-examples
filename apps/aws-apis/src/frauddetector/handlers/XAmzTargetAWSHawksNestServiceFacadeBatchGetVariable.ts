import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeBatchGetVariableHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
