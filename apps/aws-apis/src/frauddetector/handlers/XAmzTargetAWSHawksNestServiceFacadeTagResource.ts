import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeTagResourceHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
