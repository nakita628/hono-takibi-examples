import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeUntagResourceHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
