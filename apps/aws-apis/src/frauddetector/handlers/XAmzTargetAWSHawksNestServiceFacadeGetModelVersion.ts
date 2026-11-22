import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetModelVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetModelVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetModelVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
