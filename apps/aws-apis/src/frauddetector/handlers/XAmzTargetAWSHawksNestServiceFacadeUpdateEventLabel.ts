import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
