import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteModelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
