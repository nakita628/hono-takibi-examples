import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeCreateModelVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
