import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
