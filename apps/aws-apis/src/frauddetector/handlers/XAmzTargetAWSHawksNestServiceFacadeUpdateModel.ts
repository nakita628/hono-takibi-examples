import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeUpdateModelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
