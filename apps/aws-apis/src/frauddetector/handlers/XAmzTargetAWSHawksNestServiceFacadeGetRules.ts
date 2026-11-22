import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetRulesHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
