import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutExternalModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadePutExternalModelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutExternalModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
