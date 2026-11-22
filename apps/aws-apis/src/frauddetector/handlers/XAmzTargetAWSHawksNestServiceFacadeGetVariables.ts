import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetVariablesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetVariablesHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetVariablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
