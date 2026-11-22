import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteLabelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
