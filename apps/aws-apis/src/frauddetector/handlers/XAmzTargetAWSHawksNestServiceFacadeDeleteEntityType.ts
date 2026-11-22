import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
