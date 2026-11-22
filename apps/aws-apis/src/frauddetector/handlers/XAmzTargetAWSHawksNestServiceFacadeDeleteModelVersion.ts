import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
