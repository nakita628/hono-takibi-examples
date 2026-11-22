import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadePutLabelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
