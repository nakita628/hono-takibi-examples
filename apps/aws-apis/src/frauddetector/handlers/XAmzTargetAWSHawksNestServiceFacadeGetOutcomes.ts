import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetOutcomesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetOutcomesHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetOutcomesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
